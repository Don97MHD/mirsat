type BrandLogoProps = {
  className?: string;
  decorative?: boolean;
  size?: number;
};

export function BrandLogo({
  className = "",
  decorative = false,
  size = 64
}: BrandLogoProps) {
  const accessibilityProps = decorative
    ? { "aria-hidden": true }
    : { role: "img", "aria-label": "Mirsat TV logo" };

  return (
    <svg
      {...accessibilityProps}
      className={`brand-logo ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="brand-logo__crown"
        d="M29 28 42 10l15 19 16-21 14 22 17-14-7 32H33z"
      />
      <path
        className="brand-logo__left-ear"
        d="M14 61c0-10 5-16 13-16h9v43h-9c-8 0-13-6-13-16z"
      />
      <path
        className="brand-logo__right-ear"
        d="M92 45h9c8 0 13 6 13 16v11c0 10-5 16-13 16h-9z"
      />
      <rect
        className="brand-logo__shell"
        x="28"
        y="29"
        width="72"
        height="78"
        rx="25"
      />
      <rect
        className="brand-logo__screen"
        x="39"
        y="43"
        width="50"
        height="45"
        rx="12"
      />
      <path className="brand-logo__shine" d="M60 45h12L58 88H46z" />
      <path className="brand-logo__shine" d="M80 45h8L74 88h-8z" />
      <circle className="brand-logo__dot" cx="84" cy="94" r="5" />
      <path
        className="brand-logo__mic"
        d="M35 99c-11 3-17 11-15 18 2 8 15 7 20-1 3-5 3-11-5-17z"
      />
    </svg>
  );
}
