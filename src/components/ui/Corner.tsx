export default function Corner({ className }: CornerProps) {
  return (
    <svg
      width="127"
      height="127"
      viewBox="0 0 127 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_10055_51)">
        <path d="M0 7C0 3.134 3.13401 0 7 0V0V127H0V7Z" fill="white" />
        <path d="M0 7V7C0 3.13401 3.13401 0 7 0L127 0V7L0 7Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_10055_51">
          <rect width="127" height="127" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

interface CornerProps {
  className?: string;
}
