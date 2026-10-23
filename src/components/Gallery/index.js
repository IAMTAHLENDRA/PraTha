import React, { useState, useCallback, useEffect } from "react";
import "./styles.css";
import { gallery, photoUrl } from "../../utils/content";
import Photo from "../Photo";
import useReveal from "../../utils/useReveal";

// "Our Moments" — Roka / Pre-wedding tabs over a photo grid. Tapping a photo
// opens a full-screen viewer (arrows, swipe, Esc to close).
const Gallery = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(null); // index of open photo, or null
  const [touchX, setTouchX] = useState(null);
  const [ref, visible] = useReveal();

  const album = gallery[tab];
  const photos = album.photos;
  const label = (i) => `${album.label} photo ${i + 1} of Pranjali and Thalendra`;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActive((a) => (a - 1 + photos.length) % photos.length);
    },
    [photos.length]
  );
  const next = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setActive((a) => (a + 1) % photos.length);
    },
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prev();
    else if (dx < -50) next();
    setTouchX(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-head">
        <p className="section-eyebrow">Us, captured</p>
        <h2 className="section-title">Our Moments</h2>
        <span className="gold-rule" aria-hidden="true" />
      </div>

      <div className="gallery-tabs" role="tablist">
        {gallery.map((a, i) => (
          <button
            key={a.key}
            role="tab"
            aria-selected={tab === i}
            className={`gallery-tab${tab === i ? " is-active" : ""}`}
            onClick={() => setTab(i)}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div
        ref={ref}
        key={album.key}
        className={`gallery-grid reveal${visible ? " is-visible" : ""}`}
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            className="gallery-cell"
            onClick={() => setActive(i)}
            aria-label={`Open ${label(i)}`}
          >
            <Photo src={photoUrl(p.src)} alt={label(i)} position={p.focus} />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="lightbox"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button className="lb-close" onClick={close} aria-label="Close">
            ×
          </button>
          <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <img
            className="lb-img"
            src={photoUrl(photos[active].src)}
            alt={label(active)}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lb-nav lb-next" onClick={next} aria-label="Next">
            ›
          </button>
          <p className="lb-count">
            {active + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
