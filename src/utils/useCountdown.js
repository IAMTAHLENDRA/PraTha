import { useState, useEffect } from "react";

// Shared countdown logic used by both the full Countdown section and the
// sticky MiniCountdown header. Returns { days, hours, minutes, seconds } while
// the date is in the future, or null once it has passed / is invalid.
const getRemaining = (target) => {
  if (!target || isNaN(target)) return null;
  const diff = target - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const pad = (n) => String(n).padStart(2, "0");

export default function useCountdown(dateStr) {
  const target = new Date(dateStr).getTime();
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return remaining;
}
