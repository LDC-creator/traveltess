// Link to the white-labelled villa search website. NEXT_PUBLIC_VILLAS_URL can
// override it from Vercel without a code change.
export const villasUrl =
  process.env.NEXT_PUBLIC_VILLAS_URL || "https://share.google/2RC6bdVw7FVgeydFr"
export const villasUrlIsExternal = villasUrl.startsWith("http")

export const villaSteps = [
  {
    number: "01",
    title: "Discover",
    body: "Browse an extensive collection of private villas across destinations worldwide. Explore locations, compare properties and find the spaces that suit your plans.",
  },
  {
    number: "02",
    title: "Find your favourite",
    body: "Narrow down your search by destination, dates, group size and the features that matter most to you.",
  },
  {
    number: "03",
    title: "Let Bijou take it from here",
    body: "Found somewhere you love? Get in touch with your shortlist and we'll help with the next steps, including checking the details and arranging your booking.",
  },
]
