import { ReactNode } from "react";

interface RollingTextProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function RollingText({ children, className = "", style }: RollingTextProps) {
    return (
        <span
            className={`rolling-text-wrapper ${className}`}
            style={{
                display: "inline-block",
                overflow: "hidden",
                position: "relative",
                height: "1.4em",
                lineHeight: "1.4em",
                verticalAlign: "bottom",
                ...style,
            }}
        >
            <span
                className="rolling-text-inner"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
            >
                <span style={{ display: "block", height: "1.4em", lineHeight: "1.4em" }}>{children}</span>
                <span style={{ display: "block", height: "1.4em", lineHeight: "1.4em" }}>{children}</span>
            </span>
            <style>{`
        .rolling-text-wrapper:hover .rolling-text-inner {
          transform: translateY(-50%);
        }
      `}</style>
        </span>
    );
}
