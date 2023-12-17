## Running the Container

```bash
# Run
$ docker compose up --build
```

## Env configuration

Copy `.env.example` to `.env`
```dotenv
PORT=3000
SERVER_ADDRESS=http://46.243.226.156:3000/

POSTGRES_DB=rtm-core-config
POSTGRES_USER=postgres
POSTGRES_PASSWORD=rXUDAiKyoiE3XYFz74qC

PGADMIN_DEFAULT_EMAIL=admin@retomagic.com
PGADMIN_DEFAULT_PASSWORD=rXUDAiKyoiE3XYFz74qC

MINIO_ROOT_USER=root
MINIO_ROOT_PASSWORD=rXUDAiKyoiE3XYFz74qC

RABBITMQ_DEFAULT_USER=admin@retomagic.com
RABBITMQ_DEFAULT_PASS=rXUDAiKyoiE3XYFz74qC

JWT_SECRET_KEY=secret
```

## Links
* `${SERVER_ADDRESS}:3000/` - API server
* `${SERVER_ADDRESS}:5055/` - Database management web interface
* `${SERVER_ADDRESS}:9003/` - File storage web interface
* `${SERVER_ADDRESS}:15673/` - Distributed message broker web interface

## Containers
### `app` - NodeJs server
Listening on port `3000`

### `postgres` - Database
Listening on port `5434`

### `pgadmin` - Database management
Listening on `5055`

### `minio` - File storage
Listening on port `9003` and `9004`

### `rabbitmq` - Message broker
Listening on port `15673` and `5673`
