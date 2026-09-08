export type StoryEntry = {
  slug: string
  name: string
  tagline: string
  location: string
  tag: string
  image: string
  alt: string
  blurb: string
  body: string[]
  closing: string
  bestFor: string[]
  makeItYours: string
  span?: boolean
  imagePosition?: string
}

export const destinations: StoryEntry[] = [
  {
    slug: "african-safari",
    name: "African Safari",
    tagline: "Some of the world's greatest wildlife spectacles, right outside your tent.",
    location: "Kenya · Tanzania · Botswana",
    tag: "Adventure",
    image: "/images/dest-safari.png",
    alt: "Elephants and giraffes crossing the savanna at golden hour",
    blurb: "Big-five game drives, luxury tented camps and unforgettable sunrises.",
    body: [
      "Across Kenya, Tanzania and Botswana, the safari experience is about more than ticking off the big five. It's early mornings on a game drive as the light turns gold, afternoons watching herds move across open plains, and evenings around a fire under a sky full of stars.",
      "We work with a small number of exceptional camps and lodges, matched to how you like to travel — whether that's a classic tented camp, a private conservancy, or a family-friendly lodge with its own waterhole.",
    ],
    closing: "The kind of trip that changes how you see the world.",
    bestFor: ["Safari", "Wildlife", "Adventure", "Luxury lodges"],
    makeItYours:
      "From choosing the right camp and region to arranging private guides, transfers and every detail in between, we'll design a safari that's entirely yours.",
    span: true,
  },
  {
    slug: "beach-escapes",
    name: "Beach Escapes",
    tagline: "Barefoot luxury, where the ocean is always the view.",
    location: "Maldives · Seychelles",
    tag: "Relax",
    image: "/images/dest-beach.png",
    alt: "Overwater villa above a turquoise lagoon",
    blurb: "Overwater villas and barefoot luxury on the world's finest shores.",
    body: [
      "The Maldives and Seychelles are two of the world's most beautiful stretches of ocean — overwater villas, powder-soft sand and water so clear it feels unreal.",
      "Whether it's a honeymoon, a family escape or simply time to switch off, we look after every detail so all that's left to do is arrive.",
    ],
    closing: "Slow mornings, warm water and nowhere else to be.",
    bestFor: ["Beach", "Relaxation", "Honeymoons", "Overwater villas"],
    makeItYours:
      "From choosing the right island and villa to arranging transfers and experiences along the way, we'll take care of the details.",
  },
  {
    slug: "greek-isles",
    name: "Greek Isles",
    tagline: "Whitewashed villages, endless blue and the kind of light that stays with you.",
    location: "Santorini · Mykonos",
    tag: "Culture",
    image: "/images/dest-santorini.png",
    alt: "Whitewashed buildings with blue domes above the Aegean sea",
    blurb: "Sun-drenched villages, cliffside villas and endless blue horizons.",
    body: [
      "Santorini and Mykonos are made for slow days — cliffside villas overlooking the caldera, sun-drenched afternoons by the water and long dinners as the sky turns pink over the Aegean.",
      "We'll help you find the right villa or boutique hotel, away from the crowds, and build in the moments that make a trip to the Greek Isles unforgettable.",
    ],
    closing: "Island time, at its very best.",
    bestFor: ["Culture", "Coastal villages", "Couples", "Island hopping"],
    makeItYours:
      "From the perfect cliffside stay to boat trips, tavernas and everything in between, we'll shape a Greek island escape around you.",
  },
  {
    slug: "alpine-retreats",
    name: "Alpine Retreats",
    tagline: "Crisp mountain air, glacial lakes and grand alpine lodges.",
    location: "Switzerland · Italy",
    tag: "Nature",
    image: "/images/dest-alps.png",
    alt: "Turquoise glacial mountain lake reflecting snow-capped peaks",
    blurb: "Crisp mountain air, glacial lakes and grand alpine lodges.",
    body: [
      "Switzerland and Italy's alpine regions are beautiful in every season — turquoise glacial lakes and hiking trails in summer, cosy lodges and log fires once the snow arrives.",
      "We'll help you find the right base, whether that's a lakeside hotel, a mountain chalet or a grand alpine retreat, and build a trip around the pace you're after.",
    ],
    closing: "Mountain air does something to the soul.",
    bestFor: ["Mountains", "Nature", "Alpine lodges", "Scenic escapes"],
    makeItYours:
      "From choosing the right region and lodge to arranging transfers and experiences, we'll take care of the details.",
    span: true,
  },
]

export const experiences: StoryEntry[] = [
  {
    slug: "ski-mont-blanc",
    name: "Ski beneath Mont Blanc",
    tagline: "Wake up beneath one of the most iconic peaks in the Alps.",
    location: "Chamonix, France",
    tag: "Skiing",
    image: "/images/exp-chamonix.jpg",
    alt: "Skier beneath the snow-capped Mont Blanc massif in Chamonix",
    blurb: "Ski beneath the dramatic Mont Blanc massif in the legendary town of Chamonix.",
    imagePosition: "center 30%",
    body: [
      "In Chamonix, the mountains are the main event. Spend your days skiing beneath the dramatic Mont Blanc massif, with panoramic views stretching across some of Europe's most spectacular alpine scenery.",
      "Take the cable car up to Aiguille du Midi for breathtaking views from 3,842 metres, ski through the legendary Vallée Blanche with a mountain guide, or simply settle into a sunny terrace for a long alpine lunch as the peaks surround you.",
      "Come evening, return to Chamonix for fireside drinks, exceptional French dining and the unmistakable atmosphere of a mountain town that has been drawing adventurers for generations.",
    ],
    closing: "The kind of ski escape you'll remember long after the snow has melted.",
    bestFor: ["Skiing", "Adventure", "Mountain lovers", "Luxury escapes"],
    makeItYours:
      "From finding the perfect alpine retreat to arranging private guides, transfers and unforgettable experiences, we'll take care of the details.",
    span: true,
  },
  {
    slug: "lapland-adventure",
    name: "A magical Lapland adventure",
    tagline: "Step into a winter wonderland where Christmas feels like it has come to life.",
    location: "Lapland, Finland",
    tag: "Family",
    image: "/images/exp-lapland.jpg",
    alt: "Husky sled racing through a snowy Lapland forest at dusk",
    blurb: "Husky sleds, reindeer, Santa and the Northern Lights in the Arctic wilderness.",
    body: [
      "Spend the day racing through snowy forests on a husky sled, meeting reindeer and exploring the Arctic wilderness before the real magic begins — a private visit to Santa himself, hidden away amongst the snow-covered trees.",
      "As night falls, retreat to a cosy glass-roofed cabin and watch the sky for the Northern Lights, wrapped up together beneath the stars.",
      "From the first snowfall to the moment the children meet Santa, Lapland is an experience the whole family will remember long after Christmas is over.",
    ],
    closing: "A little bit of magic, made for the whole family.",
    bestFor: [
      "Families",
      "Christmas magic",
      "Winter adventures",
      "Once-in-a-lifetime experiences",
    ],
    makeItYours:
      "From choosing the perfect cabin or boutique hotel to arranging private Santa experiences, husky rides, reindeer safaris and every little detail in between, we'll create a Lapland escape that's completely yours.",
  },
  {
    slug: "float-above-maasai-mara",
    name: "Float above the Maasai Mara",
    tagline: "Rise before the sun and drift silently above the Maasai Mara as the African savannah wakes below.",
    location: "Maasai Mara, Kenya",
    tag: "Safari",
    image: "/images/exp-maasai-mara.jpg",
    alt: "Hot air balloon drifting above the Maasai Mara savannah at sunrise",
    blurb: "Drift above the savannah in a hot air balloon as the Mara wakes at sunrise.",
    imagePosition: "center 65%",
    body: [
      "From the basket of a hot air balloon, watch herds of elephant, giraffe and zebra move across the golden plains, with the Mara stretching endlessly towards the horizon.",
      "As the sun rises, the landscape transforms beneath you — a moment of stillness and perspective that feels worlds away from everyday life.",
      "Touch back down in the wilderness and celebrate with a champagne breakfast beneath an acacia tree, surrounded by the sounds of the Mara.",
    ],
    closing: "Africa from a completely different perspective.",
    bestFor: [
      "Safari",
      "Adventure",
      "Couples",
      "Families",
      "Once-in-a-lifetime experiences",
    ],
    makeItYours:
      "From choosing the right safari camp to arranging private guides, game drives and unforgettable experiences in the wilderness, we'll curate every detail around you.",
    span: true,
  },
  {
    slug: "sail-santorini-sunset",
    name: "Sail into the Santorini Sunset",
    tagline: "Leave the crowds behind and take to the Aegean as the sun begins its descent over Santorini.",
    location: "Santorini, Greece",
    tag: "Sailing",
    image: "/images/exp-santorini-sail.jpg",
    alt: "Private boat sailing the Santorini caldera at sunset",
    blurb: "Private sailing along the volcanic caldera as the Aegean turns gold at sunset.",
    imagePosition: "center 25%",
    body: [
      "Cruise along the volcanic caldera aboard a private boat, stopping to swim in hidden coves and crystal-clear waters before settling in with a glass of something chilled as the sky turns shades of gold and pink.",
      "As evening falls, watch the famous Santorini sunset from the water, with the whitewashed cliffs of Oia rising above you and the Aegean stretching endlessly into the distance.",
      "A private dinner, freshly prepared onboard, makes the perfect ending to an unforgettable evening.",
    ],
    closing: "Santorini, seen from its most beautiful side.",
    bestFor: ["Couples", "Families", "Sailing", "Food lovers", "Luxury escapes"],
    makeItYours:
      "From a private boat and local skipper to a secluded swim stop and dinner beneath the stars, we'll curate an unforgettable day on the Aegean, tailored entirely to you.",
  },
  {
    slug: "swim-wild-dolphins-mauritius",
    name: "Swim with wild dolphins",
    tagline: "Set out before the island wakes and head into the turquoise waters of the Indian Ocean in search of one of Mauritius' most magical encounters.",
    location: "Mauritius",
    tag: "Ocean",
    image: "/images/exp-mauritius-dolphins.jpg",
    alt: "Wild dolphins swimming in the turquoise waters off Mauritius",
    blurb: "Swim alongside wild dolphins in the turquoise waters of the Indian Ocean.",
    imagePosition: "center 40%",
    body: [
      "As the sun rises, watch wild dolphins play and glide through the water alongside your boat before slipping beneath the surface for an unforgettable swim in their natural habitat.",
      "Between encounters, snorkel through crystal-clear waters, explore the coastline and soak up the stillness of the ocean before heading back to shore.",
      "An exhilarating morning, surrounded by nothing but blue skies, warm water and the wild beauty of Mauritius.",
    ],
    closing: "One of those moments you'll wish you could bottle and take home.",
    bestFor: [
      "Adventure",
      "Families",
      "Couples",
      "Ocean lovers",
      "Once-in-a-lifetime experiences",
    ],
    makeItYours:
      "From a private boat and experienced local crew to the perfect snorkelling spots and a relaxed island lunch afterwards, we'll arrange every detail to make your Mauritius experience truly unforgettable.",
  },
  {
    slug: "evening-on-broadway",
    name: "An evening on Broadway",
    tagline: "As the lights begin to glow across Manhattan, get ready for an evening that feels quintessentially New York.",
    location: "New York, USA",
    tag: "City break",
    image: "/images/exp-broadway.jpg",
    alt: "Times Square and the Broadway Theatre District lit up at night",
    blurb: "Cocktails, dinner and a spectacular Broadway show in the heart of Manhattan.",
    body: [
      "Start with cocktails and dinner in the heart of the Theatre District before taking your seats for a spectacular Broadway show — surrounded by the energy, history and anticipation that makes New York theatre unlike anywhere else.",
      "When the curtain falls, step back onto the bright streets of Times Square, with the city still buzzing around you.",
    ],
    closing: "An unforgettable night in the city that never sleeps.",
    bestFor: [
      "Couples",
      "Families",
      "Theatre lovers",
      "First-time visitors",
      "City breaks",
    ],
    makeItYours:
      "From choosing the perfect show and seats to arranging dinner, cocktails and the right hotel for your stay, we'll curate your New York experience around you.",
    span: true,
  },
]

export function findDestination(slug: string) {
  return destinations.find((d) => d.slug === slug)
}

export function findExperience(slug: string) {
  return experiences.find((e) => e.slug === slug)
}
