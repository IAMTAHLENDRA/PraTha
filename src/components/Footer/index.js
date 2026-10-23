import React from "react";
import "./styles.css";
import { couple, venue, instagram } from "../../utils/content";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
  </svg>
);

// Closing section: where to find us (venue + map) and where to follow along.
const Footer = () => (
  <footer className="footer">
    <div className="footer-venue">
      <span className="footer-pin">
        <PinIcon />
      </span>
      <p className="section-eyebrow">The venue</p>
      <h2 className="footer-venue-name">{venue.name}</h2>
      <address className="footer-address">{venue.address}</address>
      <a className="footer-btn" href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
      </a>
    </div>

    <span className="gold-rule" aria-hidden="true" />

    <a
      className="footer-insta"
      href={instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow @${instagram.handle} on Instagram`}
    >
      <span className="footer-insta-logo">
        <InstagramIcon />
      </span>
      @{instagram.handle}
    </a>

    <p className="footer-sign">
      {couple.bride[0]} &amp; {couple.groom[0]}
    </p>
  </footer>
);

export default Footer;
