import { SVGProps } from "react";

function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1C4.34314 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H19C20.6569 23 22 21.6569 22 20V10C22 9.73478 21.8946 9.48043 21.7071 9.29289L13.7071 1.29292C13.6114 1.19722 13.4983 1.1229 13.3753 1.07308C13.2572 1.02527 13.1299 1 13 1H6ZM12 3H6C5.44771 3 5 3.44771 5 4V20C5 20.5523 5.44772 21 6 21H19C19.5523 21 20 20.5523 20 20V11H13C12.4477 11 12 10.5523 12 10V3ZM18.5858 9.00003L14 4.41424V9.00003H18.5858Z"
        fill="white"
      />
    </svg>
  );
}

export default CopyIcon;
