// ─────────────────────────────────────────────────────────────────────────
//  Wedding details — edit here and the whole site updates.
//
//  PHOTOS: drop image files into  public/photos/  and reference them by file
//  name below (e.g. photo: "haldi.jpg"). Until a real file exists, the site
//  shows a rose placeholder — nothing breaks.
//
//  Anything marked  // TODO  is a placeholder to fill in.
// ─────────────────────────────────────────────────────────────────────────

export const couple = {
  bride: "Pranjali",
  groom: "Thalendra",
  dates: "23 – 24 November 2026",
  city: "", // TODO: e.g. "Raipur, Chhattisgarh"
  heroPhoto: "hero.jpg",
  heroFocus: "62% 62%", // keeps both of you in frame on phones and wide screens
};

// Venue and Instagram — shown in the footer at the bottom of the page.
export const venue = {
  name: "Dream Point Hotel",
  address: "Neem Path, Janjgir, Janjgir-Champa, Chhattisgarh 495668",
  mapUrl: "https://maps.app.goo.gl/3pdM6URxpiczykqR7",
};

export const instagram = {
  handle: "the_pratha_tales",
  url: "https://www.instagram.com/the_pratha_tales/",
};

// The big day — powers the live countdown.
export const wedding = {
  // 24 November 2026, 8:00 PM India time (+05:30), so guests abroad see
  // the same countdown. Format: YYYY-MM-DDTHH:MM:SS+05:30
  date: "2026-11-24T20:00:00+05:30",
  title: "Counting down to forever",
  subtitle: "Until Pranjali & Thalendra say “I do”",
};

// THE CELEBRATIONS — one card per event, shown in this order.
// date / time / venue left as "" show "To be announced".
// theme: short dress-code theme shown as a badge on the photo.
// dressCode: outfit text (same for everyone), optional note and swatch colours.
//   Leave dressCode as null to show "To be announced".
// accent / tint: the card's colour (accent for text & bars, tint for background).
export const events = [
  {
    key: "pooja",
    name: "Pooja & Engagement",
    theme: "Pink Grace",
    tagline: "Seeking blessings together, then rings and a lot of happy tears.",
    date: "Monday, 23 November 2026",
    time: "1:00 PM",
    venue: "Royal Banquet Hall, Dream Point Hotel",
    dressCode: {
      text: "Pink outfit (any style)",
      colors: ["#f8bbd0", "#f06292", "#c2185b"],
    },
    photo: "engagement.jpg", // TODO
    accent: "#c2185b",
    tint: "#fdeef3",
  },
  {
    key: "sangeet",
    name: "Sangeet",
    theme: "Any Colour",
    tagline: "Come ready to dance — the families have been practising.",
    date: "Monday, 23 November 2026",
    time: "5:30 PM",
    venue: "Lawn, Dream Point Hotel",
    dressCode: {
      text: "Any colour outfit (any style)",
      colors: ["#5b2a86", "#1f3c88", "#c2185b", "#2bb3a3", "#f7b500"],
    },
    photo: "sangeet.jpg", // TODO
    accent: "#5b2a86",
    tint: "#f3ecfa",
  },
  {
    key: "haldi",
    name: "Haldi Carnival",
    theme: "Pastel Party",
    tagline: "Games, music, turmeric and zero dignity. Wear something you don't mind getting yellow!",
    date: "Tuesday, 24 November 2026",
    time: "9:00 AM",
    venue: "Lawn, Dream Point Hotel",
    dressCode: {
      text: "Pastel colour outfit (any style)",
      note: "Choose any pastel shade!",
      colors: [
        "#b9e4c9", "#d4c4f0", "#fcc79a", "#f7a9b8", "#fbe39a",
        "#a9cdf0", "#fde2b0", "#f9c6d3", "#b5e6ea", "#c9dfa6",
      ],
    },
    photo: "haldi.jpg", // TODO
    accent: "#b07400",
    tint: "#fff7e0",
  },
  {
    key: "wedding",
    name: "Wedding & Reception",
    theme: "Come As You Are",
    tagline: "Seven pheras, one forever — we seek your blessings as we begin our new journey, then dinner and celebration as Mr & Mrs.",
    date: "Tuesday, 24 November 2026",
    time: "8:00 PM",
    venue: "Lawn, Dream Point Hotel",
    dressCode: {
      text: "No dress code — wear whatever makes you feel your best!",
    },
    photo: "wedding.jpg", // TODO
    accent: "#b3122e",
    tint: "#fdecee",
  },
];

export const photoUrl = (name) =>
  name ? `${process.env.PUBLIC_URL}/photos/${name}` : null;
