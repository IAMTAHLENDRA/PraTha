import React from "react";
import "./styles.css";
import { events, photoUrl } from "../../utils/content";
import useReveal from "../../utils/useReveal";
import Photo from "../Photo";

const TBA = "To be announced";

const EventCard = ({ event }) => {
  const [ref, visible] = useReveal();
  const dress = event.dressCode;

  return (
    <article
      ref={ref}
      className={`event-card event-card--${event.key} reveal${visible ? " is-visible" : ""}`}
      style={{ "--accent": event.accent, "--tint": event.tint }}
    >
      <div className="event-photo">
        <Photo src={photoUrl(event.photo)} caption={event.name} />
        {event.theme && <span className="event-badge">{event.theme}</span>}
      </div>

      <div className="event-body">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-tagline">{event.tagline}</p>

        <dl className="event-details">
          <div>
            <dt>When</dt>
            <dd>
              {event.date || TBA}
              {event.time && <> · {event.time}</>}
            </dd>
          </div>
          <div>
            <dt>Where</dt>
            <dd>{event.venue || TBA}</dd>
          </div>
        </dl>

        <div className="event-dress">
          <span className="event-dress-label">Dress code</span>
          {dress ? (
            <>
              <p>{dress.text}</p>
              {dress.colors && (
                <div className="event-swatches" aria-hidden="true">
                  {dress.colors.map((c) => (
                    <span key={c} style={{ background: c }} />
                  ))}
                </div>
              )}
              {dress.note && <p className="event-dress-note">{dress.note}</p>}
            </>
          ) : (
            <p>{TBA}</p>
          )}
        </div>
      </div>
    </article>
  );
};

const Celebrations = () => {
  const [ref, visible] = useReveal();

  return (
    <section id="celebrations" className="celebrations">
      <div ref={ref} className={`celebrations-head reveal${visible ? " is-visible" : ""}`}>
        <p className="section-eyebrow">Join us for</p>
        <h2 className="section-title">The Celebrations</h2>
        <span className="gold-rule" aria-hidden="true" />
      </div>

      <div className="celebrations-grid">
        {events.map((e) => (
          <EventCard key={e.key} event={e} />
        ))}
      </div>
    </section>
  );
};

export default Celebrations;
