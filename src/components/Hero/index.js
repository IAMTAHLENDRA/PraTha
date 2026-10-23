import React, { useState } from "react";
import "./styles.css";
import { couple, photoUrl } from "../../utils/content";

// Full-screen opening: the couple's photo with names and dates over the sky.
// A blurred copy of the photo sits behind the text and fades out before it
// reaches the couple, so the faces stay sharp. If the photo isn't in
// public/photos/ yet, the rose gradient behind it shows.
const Hero = () => {
  const src = photoUrl(couple.heroPhoto);
  const [failed, setFailed] = useState(!src);

  return (
    <header className="hero">
      {!failed && (
        <div className="hero-media">
          <img
            className="hero-photo"
            src={src}
            alt={`${couple.bride} and ${couple.groom}`}
            style={{ objectPosition: couple.heroFocus }}
            onError={() => setFailed(true)}
          />
          <img
            className="hero-photo hero-photo--blur"
            src={src}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: couple.heroFocus }}
          />
        </div>
      )}
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">We're getting married</p>
        <h1 className="hero-names">
          {couple.bride}
          <span className="hero-amp">&amp;</span>
          {couple.groom}
        </h1>
        <span className="gold-rule" aria-hidden="true" />
        <p className="hero-meta">
          {couple.dates}
          {couple.city && <> · {couple.city}</>}
        </p>
        <a className="hero-cta" href="#celebrations">
          See the celebrations <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
