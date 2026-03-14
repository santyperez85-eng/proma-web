import { useState, useEffect } from "react";

export function GridOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]" style={{ opacity: 0.4 }}>
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-[1400px] h-full flex">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full"
              style={{ borderRight: '1px solid var(--proma-grid-strong)' }}
            />
          ))}
        </div>
      </div>
      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-full"
            style={{
              height: '1px',
              background: 'var(--proma-grid-strong)',
              position: 'absolute',
              top: `${(i + 1) * 5}%`,
            }}
          />
        ))}
      </div>
      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t" style={{ borderColor: 'var(--proma-accent)', opacity: 0.5 }} />
      <div className="absolute top-4 right-4 w-6 h-6 border-r border-t" style={{ borderColor: 'var(--proma-accent)', opacity: 0.5 }} />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b" style={{ borderColor: 'var(--proma-accent)', opacity: 0.5 }} />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b" style={{ borderColor: 'var(--proma-accent)', opacity: 0.5 }} />
    </div>
  );
}
