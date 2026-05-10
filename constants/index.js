const navLinks = [
  {
    id: "cocktails", // Changed from cocktails
    title: "Fresh Juices",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Crisp Apple Craze",
    country: "US",
    detail: "Bottle",
    price: "$10",
  },
  {
    name: "Mango Sunrise Nectar",
    country: "IN",
    detail: "Bottle",
    price: "$15",
  },
  {
    name: "Peach & Passionfruit",
    country: "ZA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Pomegranate Ruby",
    country: "EG",
    detail: "600 ml",
    price: "$18",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Bottle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Bottle",
    price: "$14",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$19",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  { text: "Perfectly balanced fruit blends" },
  { text: "Garnished with fresh mint & zest" },
  { text: "Ice-cold and refreshing every time" },
  { text: "Expertly pressed & stirred" },
];

const goodLists = [
  "Handpicked organic fruits",
  "Signature blending techniques",
  "Juicing artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmjuice.com", // Updated email
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 10:00pm" },
  { day: "Fri", time: "11:00am – 11:00pm" },
  { day: "Sat", time: "9:00am – 11:00pm" },
  { day: "Sun", time: "9:00am – 9:00pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Lemon-Mint",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with fresh lemons, crushed mint leaves, and a hint of agave, this lemonade is full of character. Served perfectly chilled for warm summer days.",
  },
  {
    id: 2,
    name: "Raspberry Cooler",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "A gorgeous blend that balances tangy lemon, smooth raspberry puree, and a touch of sweetness. Blended, iced, or sparkling—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Blueberry Breeze",
    image: "/images/drink3.png",
    title: "Sweet, Tangy, and Beautiful",
    description:
      "Made with fresh blueberries, lime juice, and sparkling water, this mocktail is easy to make and visually stunning. Add a sugared rim for the perfect treat.",
  },
  {
    id: 4,
    name: "Tropical Blue Oasis",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Crafted using non-alcoholic blue curacao syrup, fresh pineapple, and passionfruit for a perfect pour. A vibrant, halal-friendly getaway in a glass.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};