import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function Marquee({ children, speed = 30, reverse = false, className = "", style }: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={style}
    >
      <div
        className="inline-flex whitespace-nowrap"
        style={{
          animation: `${reverse ? "marquee-scroll-reverse" : "marquee-scroll"} ${speed}s linear infinite`,
        }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center">{children}</span>
      </div>
    </div>
  );
}
