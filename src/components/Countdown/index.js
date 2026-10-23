import React from "react";
import "./styles.css";
import { wedding } from "../../utils/content";
import useCountdown, { pad } from "../../utils/useCountdown";
import useReveal from "../../utils/useReveal";

const Countdown = () => {
  const remaining = useCountdown(wedding.date);
  const [ref, visible] = useReveal();

  const units = remaining
    ? [
        { label: "Days", value: remaining.days },
        { label: "Hours", value: pad(remaining.hours) },
        { label: "Minutes", value: pad(remaining.minutes) },
        { label: "Seconds", value: pad(remaining.seconds) },
      ]
    : [];

  return (
    <section id="countdown" className="countdown">
      <div ref={ref} className={`cd-inner reveal${visible ? " is-visible" : ""}`}>
        <p className="section-eyebrow">{wedding.subtitle}</p>
        <h2 className="section-title">{wedding.title}</h2>

        {remaining ? (
          <div className="cd-grid">
            {units.map((u) => (
              <div className="cd-cell" key={u.label}>
                <span className="cd-value">{u.value}</span>
                <span className="cd-label">{u.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="cd-arrived">
            The big day is here{" "}
            <span role="img" aria-label="ring">
              💍
            </span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Countdown;
