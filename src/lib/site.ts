// Single source of truth for Quick Dumpsters site content.
// Every page reads from this — change once, propagates everywhere.

export const site = {
  name: 'Quick Dumpsters',
  shortName: 'Quick Dumpsters',
  tagline: 'Drop. Fill. Done.',
  city: 'Charleston',
  state: 'South Carolina',
  phone: '(843) 555-0142',
  phoneRaw: '8435550142',
  email: 'hello@quickdumpsters.co',
  address: '2400 Meeting Street Rd, Charleston, SC 29405',
  rating: 4.9,
  reviewCount: 327,
  yearsInBusiness: 12,
  jobsCompleted: 8400,
  hours: 'Mon–Sat • 7am – 6pm',
  description: "Charleston's roll-off dumpster company since 2012. Built for contractors who can't afford a missed window and homeowners who don't want to call twice. Same-day drop-off, transparent flat-rate pricing, and a phone we actually answer.",
  serviceTypes: ['Residential', 'Commercial'] as const,
  nearbyAreas: ['Mount Pleasant', 'North Charleston', 'James Island', 'West Ashley', 'Daniel Island', 'Summerville', 'Goose Creek'],
  ctaBannerPhoto: '/photo-9.jpg',
  heroPhoto: '/photo-1.jpg',
  galleryPhotos: [
    { src: '/photo-2.jpg', alt: 'Quick Dumpsters truck loaded for a fleet pickup',                  category: 'Residential drop-off' },
    { src: '/photo-3.jpg', alt: '20-yard Quick Dumpsters bin on a downtown Charleston jobsite',     category: 'Commercial fleet' },
    { src: '/photo-4.jpg', alt: 'Quick Dumpsters truck dropping a 30-yard dumpster commercially',   category: 'Downtown jobsite' },
  ],
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/sizes', label: 'Sizes' },
    { href: '/residential', label: 'Residential' },
    { href: '/commercial', label: 'Commercial' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
}

export type Size = {
  slug: string
  yards: number
  nickname: string
  goodFor: string
  longDescription: string
  dimensions: string
  priceLow: number
  priceHigh: number
  rentalDays: number
  capacityPickups: number     // pickup-truck loads it holds
  weightLimitTons: number
  photo: string
  bestFor: string[]           // bullet list, e.g. ["Single-room cleanouts", ...]
  heavyOk?: boolean           // can take dirt/concrete?
}

export const sizes: Size[] = [
  {
    slug: '10-yard',
    yards: 10,
    nickname: 'The Cleanout',
    goodFor: 'Single-room cleanouts, small bath remodels, garage purges.',
    longDescription: "Our smallest container — perfect when you don't need to haul a whole house. Fits in tight Charleston driveways, sneaks past low branches, and won't dominate your front yard for the week.",
    dimensions: "12'L × 8'W × 3.5'H",
    priceLow: 295,
    priceHigh: 355,
    rentalDays: 7,
    capacityPickups: 4,
    weightLimitTons: 2,
    photo: '/photo-5.jpg',
    bestFor: [
      'Single-room cleanouts',
      'Small bathroom remodels',
      'Garage and basement purges',
      'Storage unit cleanouts',
      'Small roof patch jobs',
    ],
    heavyOk: true,
  },
  {
    slug: '15-yard',
    yards: 15,
    nickname: 'The Reno',
    goodFor: 'Small renovations, deck tear-offs, basement cleanouts.',
    longDescription: 'The middle child — bigger than the 10 but still driveway-friendly. The size most contractors call us about for a one-room reno or a deck tear-off.',
    dimensions: "16'L × 8'W × 4'H",
    priceLow: 355,
    priceHigh: 435,
    rentalDays: 7,
    capacityPickups: 5,
    weightLimitTons: 2.5,
    photo: '/photo-6.jpg',
    bestFor: [
      'Kitchen demos',
      'Bathroom gut-and-renos',
      'Deck and porch tear-offs',
      'Landscaping clearouts',
      'Whole-basement cleanouts',
    ],
  },
  {
    slug: '20-yard',
    yards: 20,
    nickname: 'The Workhorse',
    goodFor: 'Whole-home cleanouts, kitchen remodels, mid-size construction jobs.',
    longDescription: 'Our most-rented size. The Workhorse handles a whole-home cleanout, a major kitchen remodel, or a mid-size new build without complaint. If you\'re unsure what size you need, this is usually the right answer.',
    dimensions: "22'L × 8'W × 4.5'H",
    priceLow: 425,
    priceHigh: 525,
    rentalDays: 7,
    capacityPickups: 8,
    weightLimitTons: 3,
    photo: '/photo-7.jpg',
    bestFor: [
      'Whole-home cleanouts',
      'Kitchen remodels',
      'New-build framing debris',
      'Estate cleanouts',
      'Multi-room renovations',
    ],
  },
  {
    slug: '30-yard',
    yards: 30,
    nickname: 'The Big One',
    goodFor: 'Roof tear-offs, large renovations, commercial jobsites and demolition.',
    longDescription: "When you need to move a lot of debris fast. Roof tear-offs, full home renovations, or a commercial jobsite that's burning through dumpsters. Tall side walls, big tonnage allowance, one truck does it all.",
    dimensions: "22'L × 8'W × 6'H",
    priceLow: 525,
    priceHigh: 645,
    rentalDays: 7,
    capacityPickups: 12,
    weightLimitTons: 4,
    photo: '/photo-8.jpg',
    bestFor: [
      'Roof tear-offs',
      'Whole-home demolitions',
      'Large additions',
      'Commercial site cleanups',
      'Multi-week construction jobs',
    ],
  },
]

export const faq = [
  { q: 'How much does a dumpster rental cost in Charleston?', a: 'Pricing depends on size and how long you keep it. Our 10-yard starts at $295 and our 30-yard runs up to $645. Every quote is flat-rate — no surprise dump fees, no hidden charges. Get a quote in 60 seconds.' },
  { q: 'How long can I keep the dumpster?', a: "Every Quick Dumpsters rental includes 7 days. Need it longer? It's $10/day after that. Just call us, we'll work with you. Most renovation jobs end up at 10-14 days." },
  { q: 'Do I need a permit?', a: 'If the dumpster sits on your driveway, no permit needed. If it has to go on a public street, the City of Charleston requires a street-use permit ($60). We can pull it for you so you don\'t have to deal with City Hall.' },
  { q: "What can't I put in the dumpster?", a: 'No hazardous waste — paint, motor oil, batteries, propane tanks, tires, asbestos, or refrigerants. Electronics are best taken to the Charleston County e-waste site. Everything else — drywall, lumber, shingles, flooring, furniture — is fair game.' },
  { q: 'How fast can you deliver?', a: 'Same-day if you call before noon. Next-day for anything later. We text you a 30-minute heads-up when the truck is on the way, and again when it\'s dropped — so you never have to wait around.' },
  { q: 'What size do I need?', a: "Quick rule of thumb: 10-yard for one room, 20-yard for a whole house, 30-yard for a roof tear-off, 40-yard for new construction. Not sure? Call us — we've sized thousands of Charleston jobs and we'll talk it through with you in two minutes." },
]

export const reviews = [
  { author: 'Sarah K.',   rating: 5, text: "Called at 9am, dumpster was on my driveway by 1pm. Pricing was exactly what they quoted — no surprise fees on pickup. Will absolutely use them on the next reno.",          source: 'Google' },
  { author: 'Marcus J.',  rating: 5, text: "I'm a contractor and I run through 3-4 dumpsters a month. Quick Dumpsters is the only one in Charleston that picks up the phone, shows up on time, and doesn't nickel-and-dime me.", source: 'Google' },
  { author: 'Eleanor R.', rating: 5, text: "Had them haul a 30-year garage cleanout. The driver placed it perfectly to avoid my magnolia, called when it was on the way, came back the day I asked. Genuinely lovely people.",  source: 'Google' },
]
