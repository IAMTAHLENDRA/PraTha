import React, { useMemo } from "react";
import "./styles.css";

const GLYPHS = ["🌸", "🌷", "❀", "✿", "❤", "💕", "🌺", "❤"];

// A soft layer of flowers and hearts drifting down the screen. Purely decorative.
// `count` controls density; each petal gets randomized timing/position so
// the field never looks like a loop.
const Petals = ({ count = 14 }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 20,
        delay: -Math.random() * 18,
        duration: 12 + Math.random() * 12,
        drift: (Math.random() * 2 - 1) * 60,
        glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        opacity: 0.35 + Math.random() * 0.45,
      })),
    [count]
  );

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--drift": `${p.drift}px`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
};

export default Petals;
