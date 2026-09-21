export const BUSINESS = {
  name: "LED TV SALE AND SERVICE",
  tagline: "25+ Years of Trusted LED TV Repair & Sales Experts",
  phone: "9810555308",
  phoneDisplay: "+91 98105 55308",
  phoneHref: "tel:+919810555308",
  whatsapp: "https://wa.me/919810555308",
  altPhones: ["8800345308"],
  email: "shreesiddhielectronics@gmail.com",
  emailHref: "mailto:shreesiddhielectronics@gmail.com",
  address:
    "613G, Nyay Khand 2, Kala Pathar Road, Opp. Bharat Petrol Pump, Indirapuram, Ghaziabad",
  mapLat: "28.636911",
  mapLng: "77.359772",
  mapUrl: "https://maps.google.com/?q=28.636911,77.359772",
  hours: "Monday – Sunday | 9:00 AM – 9:00 PM",
  rating: "5.0",
  reviews: "9 Reviews",
  experience: "25+ Years",
};

export const waLink = (msg: string) =>
  `https://wa.me/919810555308?text=${encodeURIComponent(msg)}`;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "TV Sales", href: "/tv-sales" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const BRANDS = [
  "Sony",
  "Samsung",
  "LG",
  "Mi",
  "OnePlus",
  "Panasonic",
  "Toshiba",
  "Vu",
  "TCL",
  "Philips",
  "Haier",
  "Hisense",
];

export const SERVICES = [
  {
    slug: "led-tv-repair",
    icon: "Tv",
    title: "LED TV Repair",
    desc: "Backlight, panel lines, no display, auto on-off — chip-level diagnosis with genuine parts & same-day fix.",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "smart-tv-repair",
    icon: "Wifi",
    title: "Smart TV Repair",
    desc: "Android / WebOS / Tizen software, Wi-Fi, app crashes, stuck on logo — flashing, reset & board repair.",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "oled-qled-repair",
    icon: "Sparkles",
    title: "OLED / QLED Repair",
    desc: "Premium panel care for LG OLED, Samsung QLED — colour calibration, panel bonding & power faults.",
    img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "sony-audio-repair",
    icon: "Speaker",
    title: "Sony Audio System Repair",
    desc: "25 yrs specialisation in Sony home theatre, speakers, amplifiers — no sound, IC & power stage repair.",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "motherboard-repair",
    icon: "Cpu",
    title: "TV Motherboard Repair",
    desc: "Main-board chip-level repair — HDMI dead, no signal, backlight driver & processor faults fixed in-house.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "display-panel-repair",
    icon: "Monitor",
    title: "Display Panel Repair",
    desc: "Broken / cracked panel replacement, line & patch repair, COF bonding with warranty on new panels.",
    img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "power-supply-repair",
    icon: "PlugZap",
    title: "Power Supply Repair",
    desc: "Dead TV, blinking standby light, fuse & SMPS faults — component-level power board service.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "hdmi-sound",
    icon: "Cable",
    title: "HDMI & Sound Issues",
    desc: "No sound, distorted audio, HDMI ARC faults, speaker replacement & port rework done at your home.",
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "wall-mount",
    icon: "Drill",
    title: "Wall Mount Installation",
    desc: "Safe concealed-wiring wall mounting for 32″–85″ TVs with levelling, bracket & demo included.",
    img: "https://images.unsplash.com/photo-1467292304034-964c65eccb70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "doorstep",
    icon: "House",
    title: "Home Doorstep Service",
    desc: "Ghaziabad + Indirapuram same-day doorstep visit. Transparent quote before any work starts.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "tv-assembly",
    icon: "Factory",
    title: "TV Assembly on Order",
    desc: "Custom-assembled LED TVs on order — choose size, panel grade, RAM & warranty. Best wholesale rates.",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "remote-sales",
    icon: "Remote",
    title: "All TV Remote Sales",
    desc: "Original & compatible remotes for every brand — Sony, Samsung, LG, Mi, Vu, TCL with home delivery.",
    img: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop",
  },
];

export const PRODUCTS = [
  {
    name: "32 inch LED TV",
    tag: "Best Seller",
    price: "₹11,999 onwards",
    specs: ["HD Ready", "Android Smart", "20W Sound", "1 Yr Warranty"],
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "40 inch Smart TV",
    tag: "New",
    price: "₹16,999 onwards",
    specs: ["Full HD", "Android 11", "Dolby Audio", "1 Yr Warranty"],
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "43 inch Full HD",
    tag: "Popular",
    price: "₹19,999 onwards",
    specs: ["FHD IPS Panel", "Voice Remote", "Dual-band Wi-Fi", "1 Yr Warranty"],
    img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "50 inch 4K Smart TV",
    tag: "4K Ultra HD",
    price: "₹28,999 onwards",
    specs: ["4K UHD HDR10", "Dolby Vision", "30W Speakers", "1 Yr Warranty"],
    img: "https://images.unsplash.com/photo-1467292304034-964c65eccb70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "55 inch Android TV",
    tag: "Premium",
    price: "₹34,999 onwards",
    specs: ["4K QLED Option", "Hands-free Voice", "Dolby Atmos", "1 Yr Warranty"],
    img: "https://images.unsplash.com/photo-1593359863503-f598684c806f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Refurbished LED TVs",
    tag: "Value Pick",
    price: "₹6,999 onwards",
    specs: ["Tested 40+ Points", "New Panel Options", "6 Month Warranty", "All Sizes"],
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
  },
];

export const REAL_IMAGES = [
  {
    src: "/images/real/shop-front.webp",
    title: "Our Store — LED TV Sale & Service, Indirapuram",
    desc: "Branch of Shree Siddhi Electronics · 25 Years Experience · Sony · Samsung · LG",
  },
  {
    src: "/images/real/workshop-tvs.webp",
    title: "Live Repair Workshop",
    desc: "Multiple LED TVs on test & repair benches — real in-house chip-level work",
  },
  {
    src: "/images/real/motherboard-repair.webp",
    title: "Chip-Level Motherboard Repair",
    desc: "Opened LED TV showing SMPS, main-board & T-con — component-level diagnosis",
  },
];

export const GALLERY = [
  ...REAL_IMAGES.map((r) => ({ src: r.src, title: r.title, real: true })),
  { src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1200&auto=format&fit=crop", title: "Premium Wall-Mounted LED TV", real: false },
  { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop", title: "Technician on Home Visit", real: false },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", title: "Motherboard Component Repair", real: false },
  { src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop", title: "Smart TV Testing", real: false },
  { src: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop", title: "Sony Audio System Service", real: false },
  { src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop", title: "Electronics Workshop", real: false },
  { src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop", title: "Circuit Diagnosis", real: false },
  { src: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1200&auto=format&fit=crop", title: "Remote Collection", real: false },
  { src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1200&auto=format&fit=crop", title: "Premium Living Room Setup", real: false },
];

export const REVIEWS = [
  { name: "Rakesh Sharma", area: "Indirapuram", text: "My 55 inch Samsung had display lines. They repaired the panel same day at genuine price. 25 years experience clearly shows.", stars: 5 },
  { name: "Pooja Verma", area: "Nyay Khand", text: "Bought 43 inch Full HD TV. Best price in Ghaziabad, proper bill & warranty. Installation same evening.", stars: 5 },
  { name: "Amit Tyagi", area: "Makanpur", text: "Sony home theatre no-sound issue solved in one visit. Very knowledgeable for Sony audio systems.", stars: 5 },
  { name: "Sunita Singh", area: "Vasundhara", text: "Motherboard fault in LG TV — other shops said replace TV. These experts repaired the board for fraction of cost.", stars: 5 },
  { name: "Mohd. Arif", area: "Indirapuram", text: "Doorstep service is excellent. Technician came in 2 hours, fixed backlight issue in front of us.", stars: 5 },
  { name: "Neha Gupta", area: "Ghaziabad", text: "Got original Samsung remote + wall mount fitting. Neat work, transparent charges. Highly recommended.", stars: 5 },
];

export const FAQS = [
  { q: "Do you provide doorstep TV repair in Indirapuram / Ghaziabad?", a: "Yes. Same-day doorstep service across Indirapuram, Makanpur, Nyay Khand, Vasundhara & full Ghaziabad, 9 AM – 9 PM all 7 days. Call or WhatsApp 9810555308." },
  { q: "Which brands do you repair?", a: "All brands — Sony, Samsung, LG, Mi, OnePlus, TCL, Vu, Philips, Panasonic, Toshiba, Haier & more, including OLED / QLED / Smart TVs." },
  { q: "Do you use genuine spare parts?", a: "100% genuine / OEM-grade panels, boards & backlights with proper billing and warranty on replaced parts." },
  { q: "How much does LED TV repair cost?", a: "Minor service starts low; backlight, board & panel work is quoted transparently after free diagnosis. No work starts without your approval." },
  { q: "Do you repair Sony audio systems?", a: "Yes — 25+ years specialisation in Sony home theatres, speakers & amplifiers including no-sound & IC faults." },
  { q: "Do you sell new & refurbished TVs?", a: "Yes — 32″ to 55″ new Smart / 4K TVs plus tested refurbished TVs from ₹6,999 with warranty. Custom assembly on order available." },
  { q: "Do you sell TV remotes?", a: "Yes — original & compatible remotes for every brand with doorstep delivery." },
  { q: "How long does repair take?", a: "Most repairs same-day. Panel orders / complex bonding take 24–48 hrs with standby guidance." },
  { q: "Is there warranty on repair?", a: "Yes — service warranty on workmanship plus manufacturer warranty on new parts / panels." },
  { q: "How do I book a repair?", a: "Call 9810555308, WhatsApp, or fill the booking form — we confirm your slot instantly on WhatsApp." },
];
