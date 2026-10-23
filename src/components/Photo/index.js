import React, { useState } from "react";
import "./styles.css";

// Renders a photo that fills its container. If the file isn't present yet
// (or fails to load), it falls back to a pretty rose placeholder so the
// layout never breaks before real photos are added to public/photos/.
// `position` maps to CSS object-position (e.g. "top", "bottom", "50% 20%") to
// control which part of the photo stays in frame when it's cropped to fit.
const Photo = ({ src, alt, caption, position }) => {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <div className="photo photo--fallback">
        <span className="photo-heart" aria-hidden="true">
          🌸
        </span>
        {caption && <em className="photo-fallback-caption">{caption}</em>}
      </div>
    );
  }

  return (
    <div className="photo">
      <img
        src={src}
        alt={alt || caption || "A memory of us"}
        loading="lazy"
        style={position ? { objectPosition: position } : undefined}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default Photo;
