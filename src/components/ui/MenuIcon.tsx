import { cn } from "@/lib/client/utils";

export default function MenuIcon({ className, active }: MenuIconProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "transition-all duration-300 ease-in-out origin-center",
          active && "translate-y-1 translate-x-0.5 -rotate-30",
        )}
      />
      <path
        d="M4 16H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "transition-all duration-300 ease-in-out origin-center",
          active && "-translate-y-0.75 translate-x-0.5 rotate-30",
        )}
      />
    </svg>
  );
}

interface MenuIconProps {
  className?: string;
  active?: boolean;
}
