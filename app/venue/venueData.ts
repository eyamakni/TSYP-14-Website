export const EASE = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number
];

export type VenueFeatureIcon =
  | "capacity"
  | "halls"
  | "workshops"
  | "wifi"
  | "parking"
  | "catering";

export const VENUE_FEATURES: {
  icon: VenueFeatureIcon;
  label: string;
  value: string;
  desc: string;
}[] = [
  {
    icon: "capacity",
    label: "Capacity",
    value: "1 200+",
    desc: "Seats across multiple halls",
  },
  {
    icon: "halls",
    label: "Conference Halls",
    value: "8",
    desc: "Equipped with AV systems",
  },
  {
    icon: "workshops",
    label: "Workshop Rooms",
    value: "12",
    desc: "Hands-on session spaces",
  },
  {
    icon: "wifi",
    label: "High-Speed WiFi",
    value: "1 Gbps",
    desc: "Full venue coverage",
  },
  {
    icon: "parking",
    label: "Parking",
    value: "500+",
    desc: "Free secured spots",
  },
  {
    icon: "catering",
    label: "Catering",
    value: "3",
    desc: "On-site restaurants",
  },
];

export const VENUE_MAPS = [
  {
    src: "/venue/map-floor-0.png",
    label: "Ground Floor",
  },
  {
    src: "/venue/map-floor-1.png",
    label: "First Floor",
  },
];

export const TUNISIA_GALLERY = [
  "/venue/tunisia-1.jpg",
  "/venue/tunisia-2.jpg",
  "/venue/tunisia-3.jpg",
  "/venue/tunisia-4.jpg",
  "/venue/tunisia-5.jpg",
  "/venue/tunisia-6.jpg",
];

export const VISA_FREE = [
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Australia",
  "Austria",
  "Bahrain",
  "Barbados",
  "Belarus",
  "Belgium",
  "Benin",
  "Bosnia and Herzegovina",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Canada",
  "Cape Verde",
  "Chile",
  "China",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Dominica",
  "Equatorial Guinea",
  "Estonia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Germany",
  "Greece",
  "Guinea",
  "Guinea-Bissau",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "Indonesia",
  "Ireland",
  "Italy",
  "Ivory Coast",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kiribati",
  "Kuwait",
  "Latvia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Morocco",
  "Namibia",
  "Netherlands",
  "New Zealand",
  "Niger",
  "North Macedonia",
  "Norway",
  "Oman",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Seychelles",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vatican City",
] as const;
export const CONDITIONAL_VISA_FREE: Record<string, string> = {
  Iran:
    "Visa-free for tourism only, for up to 15 days within a 180-day period.",
  Iraq:
    "Visa-free for tourism only, for up to 15 days within a 180-day period.",
};

export const CURRENCIES: Record<string, { name: string }> = {
  USD: { name: "US Dollar" },
  EUR: { name: "Euro" },
  GBP: { name: "British Pound" },
  CAD: { name: "Canadian Dollar" },
  AED: { name: "UAE Dirham" },
  SAR: { name: "Saudi Riyal" },
  JPY: { name: "Japanese Yen" },
  INR: { name: "Indian Rupee" },
  CNY: { name: "Chinese Yuan" },
  MAD: { name: "Moroccan Dirham" },
  EGP: { name: "Egyptian Pound" },
  DZD: { name: "Algerian Dinar" },
  LYD: { name: "Libyan Dinar" },
};

export const FLOATING_FLAGS = [
  { code: "tn", name: "Tunisia", x: "8%", y: "18%" },
  { code: "dz", name: "Algeria", x: "22%", y: "7%" },
  { code: "de", name: "Germany", x: "42%", y: "2%" },
  { code: "fr", name: "France", x: "64%", y: "7%" },
  { code: "it", name: "Italy", x: "80%", y: "19%" },

  { code: "ma", name: "Morocco", x: "5%", y: "39%" },
  { code: "in", name: "India", x: "18%", y: "43%" },
  { code: "es", name: "Spain", x: "86%", y: "38%" },
  { code: "tr", name: "Turkey", x: "94%", y: "53%" },

  { code: "jp", name: "Japan", x: "9%", y: "64%" },
  { code: "kr", name: "South Korea", x: "23%", y: "81%" },
  { code: "br", name: "Brazil", x: "48%", y: "90%" },
  { code: "ae", name: "United Arab Emirates", x: "70%", y: "82%" },
  { code: "us", name: "United States", x: "84%", y: "64%" },

  { code: "gb", name: "United Kingdom", x: "35%", y: "24%" },
  { code: "ca", name: "Canada", x: "60%", y: "25%" },
  { code: "sa", name: "Saudi Arabia", x: "32%", y: "69%" },
  { code: "eg", name: "Egypt", x: "62%", y: "68%" },
];

export const DISCOVER_TAGS = [
  "Beaches",
  "Desert",
  "History",
  "Culture",
  "Cuisine",
  "Architecture",
];