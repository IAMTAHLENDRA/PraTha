import React from "react";
import "./styles.css";
import { wedding } from "../../utils/content";
import useCountdown, { pad } from "../../utils/useCountdown";

// Small sticky countdown pinned top-right — same day/hour/minute/second
// format as the main Countdown section, always visible while browsing.
const MiniCountdown = () => {
  const remaining = useCountdown(wedding.date);

  return (
    <div className="mini-cd" aria-label="Countdown to the wedding">
      <span className="mini-cd-label">
        <span className="mini-cd-ring" role="img" aria-label="ring">
          💍
        </span>
        Until forever
      </span>
      {remaining ? (
        <div className="mini-cd-grid">
          <span className="mini-cd-cell">
            <b>{remaining.days}</b>
            <i>Days</i>
          </span>
          <span className="mini-cd-sep">:</span>
          <span className="mini-cd-cell">
            <b>{pad(remaining.hours)}</b>
            <i>Hrs</i>
          </span>
          <span className="mini-cd-sep">:</span>
          <span className="mini-cd-cell">
            <b>{pad(remaining.minutes)}</b>
            <i>Min</i>
          </span>
          <span className="mini-cd-sep">:</span>
          <span className="mini-cd-cell">
            <b>{pad(remaining.seconds)}</b>
            <i>Sec</i>
          </span>
        </div>
      ) : (
        <div className="mini-cd-arrived">
          Today{" "}
          <span role="img" aria-label="ring">
            💍
          </span>
        </div>
      )}
    </div>
  );
};

export default MiniCountdown;
