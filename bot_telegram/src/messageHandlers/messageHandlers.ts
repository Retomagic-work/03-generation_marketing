import {postToApi, getFromApi} from "../api/apiService";
import axios, {AxiosError} from "axios";
import {Context} from "node:vm";

interface TelegramErrorResponse {
    ok: boolean;
    error_code: number;
    description: string;
    parameters?: {
        retry_after: number;
    };
}

export const handleTextMessage = async (ctx: Context) => {
    try {
        const postResponse = await postToApi(ctx.message.text);

        if (postResponse) {
            const requestId = postResponse.data.id;

            const checkResponse = async () => {
                try {
                    const getResponse = await getFromApi(requestId);
                    if (getResponse.data.status === 'success') {
                        clearInterval(checkInterval);
                        const replyMessage = getResponse.data.response.text;
                        ctx.reply(replyMessage);
                        await ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
                    } else {
                        await ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
                    }
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        const axiosError = error as AxiosError<TelegramErrorResponse>;
                        if (axiosError.response && axiosError.response.status === 429) {
                            const retryAfter = (axiosError.response.data.parameters?.retry_after ?? 1) * 1000;
                            console.log(`Waiting for ${retryAfter / 1000} seconds`);
                            await new Promise(resolve => setTimeout(resolve, retryAfter));
                            checkResponse();
                        } else {
                            clearInterval(checkInterval);
                            console.error(error);
                            ctx.reply(`Произошла ошибка при получении ответа: ${error}`);
                        }
                    } else {
                        clearInterval(checkInterval);
                        console.error(error);
                        ctx.reply(`Произошла ошибка: ${error}`);
                    }
                }
            };
            const checkInterval = setInterval(checkResponse, 500);
        }

    } catch (error) {
        console.error(error);
        ctx.reply(`Произошла ошибка: ${error}`);
    }
};


export const handleStickerMessage = async (ctx: Context) => {
    const stickerFileId = ctx.message.sticker.file_id
    ctx.replyWithSticker(stickerFileId)
}
