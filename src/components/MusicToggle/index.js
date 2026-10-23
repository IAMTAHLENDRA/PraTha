import React, { useRef, useState } from "react";
import "./styles.css";

// Background music from public/music/theme.m4a (a short clip, looped).
// Autoplay is blocked by browsers, so this is an explicit play/pause
// control. If the file is absent, the button simply does nothing.
const TRACK = `${process.env.PUBLIC_URL}/music/theme.m4a`;

const MusicToggle = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.5;
      const p = a.play();
      if (p && p.then) {
        p.then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        setPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK} loop preload="none" />
      <button
        className={`music-toggle${playing ? " is-playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="music-icon">{playing ? "❚❚" : "♫"}</span>
      </button>
    </>
  );
};

export default MusicToggle;
