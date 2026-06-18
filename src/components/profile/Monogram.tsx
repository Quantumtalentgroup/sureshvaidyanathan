type MonogramProps = {
  size?: number;
  className?: string;
};

export function Monogram({ size = 36, className = "" }: MonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label="Suresh Vaidyanathan monogram"
    >
      <circle
        cx="32"
        cy="32"
        r="30.5"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="0.6"
        strokeDasharray="1 3"
      />
      {/* S */}
      <path
        d="M28 22c-3.5 0-6 1.8-6 4.6 0 2.4 1.7 3.6 5.4 4.4l1.8.4c3.6.8 5.2 1.9 5.2 4.2 0 2.6-2.4 4.4-6 4.4-3 0-5.4-1.4-6.2-3.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* V */}
      <path
        d="M36 22l5 18 5-18"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
