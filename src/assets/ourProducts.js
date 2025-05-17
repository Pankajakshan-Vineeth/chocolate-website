import trufflecake1 from './trufflecake1.jpg'
import trufflecake3 from './trufflecake3.jpg'
import trufflecake4 from './trufflecake4.jpg'
import orange_almond from "./orange_almond.jpg";
import opera from "./opera.jpg";
import mouse from "./mouse.jpg";
import berry from "./berry.jpg";
import cold_chocolate1 from './cold_choc1.png'
import cold_chocolate2 from './cold_choc2.png'
import eggless1 from "./eggless1.jpg"
import eggless2 from "./eggless2.jpg"
import eggless3 from "./eggless3.jpg"
import eggless4 from "./eggless4.jpg"
import eggless5 from "./eggless5.jpg"
import strawberry from "./strawberry.jpg";
import seasonal1 from "./seasonal1.jpg"
import seasonal2 from "./seasonal2.jpg"
import defaultImage from "./default.jpg";

const products = [
    
  {
    id: 1,
    name: "Belgian Truffle Cake",
    category: "cakes",
    price: 1200,
    image: [trufflecake1, trufflecake3, trufflecake4],
  },
  {
    id: 2,
    name: "Chocolate Almond & Orange Cake",
    category: "cakes",
    price: 1200,
    image: [orange_almond],
  },
  {
    id: 3,
    name: "Opera Cake",
    category: "cakes",
    price: 1200,
    image: [opera],
  },
  {
    id: 4,
    name: "Belgian Mousse Cake",
    category: "cakes",
    price: 1200,
    image: [mouse],
  },
  {
    id: 5,
    name: "Chocolate Berry Cake",
    category: "cakes",
    price: 320,
    image: [berry],
  },
  {
    id: 6,
    name: "Cold Chocolate Cake",
    category: "cakes",
    price: 1400,
    image: [cold_chocolate1, cold_chocolate2],
  },
  {
    id: 7,
    name: "Eggless Truffle Cake",
    category: "cakes",
    price: 1500,
    image: [eggless1, eggless2, eggless3, eggless4, eggless5],
  },
  {
    id: 8,
    name: "Strawberry & Cream Cake",
    category: "cakes",
    price: 2400,
    image: [strawberry],
  },
  {
    id: 9,
    name: "Seasonal Fruit Cake",
    category: "cakes",
    price: 2125,
    image: [seasonal1, seasonal2],
  },
  {
    id: 10,
    name: "Chocolate Velvets",
    category: "chocolates",
    price: 1200,
    image: [defaultImage],
  },
  {
    id: 11,
    name: "Truffles & Pralines",
    category: "chocolates",
    price: 999,
    image: [defaultImage],
  },
  {
    id: 12,
    name: "DIY Hot Chocolate Dips",
    category: "chocolates",
    price: 800,
    image: [defaultImage],
  },
  {
    id: 13,
    name: "Chocolate Dragees",
    category: "chocolates",
    price: 750,
    image: [defaultImage],
  },
  {
    id: 14,
    name: "Assorted Belgian Milk & Dark Chocolates",
    category: "chocolates",
    price: 380,
    image: [defaultImage],
  },
  {
    id: 15,
    name: "Assorted Belgian Dark Chocolates",
    category: "chocolates",
    price: 380,
    image: [defaultImage],
  },
  {
    id: 16,
    name: "Belgian Chocolate for Baking",
    category: "chocolates",
    price: 380,
    image: [defaultImage],
  },
  {
    id: 17,
    name: "Chocolate Velvets (Vegan Range)",
    category: "chocolates",
    price: 1200,
    image: [defaultImage],
  },
  {
    id: 18,
    name: "Assorted Belgian Milk Chocolate",
    category: "chocolates",
    price: 380,
    image: [defaultImage],
  },
  {
    id: 19,
    name: "Belgian Truffle Cakes",
    category: "cakes",
    price: 295,
    image: [defaultImage],
  },
  {
    id: 20,
    name: "Dark Belgian Mousse Cake",
    category: "cakes",
    price: 295,
    image: [defaultImage],
  },
  {
    id: 23,
    name: "German Mudcake",
    category: "cakes",
    price: 295,
    image: [defaultImage],
  },
  {
    id: 24,
    name: "Eggless Truffle Pastry",
    category: "cakes",
    price: 295,
    image: [defaultImage],
  },
  {
    id: 25,
    name: "Belgian Chocolate Brownie",
    category: "cakes",
    price: 395,
    image: [defaultImage],
  },
  {
    id: 26,
    name: "Assorted Macarons",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 27,
    name: "Chocolate Macaron",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 28,
    name: "Pistachio Macaron",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 29,
    name: "Strawberry Macaron",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 30,
    name: "Blueberry Macaron",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 31,
    name: "Vanilla Macaron",
    category: "macarons",
    price: 495,
    image: [defaultImage],
  },
  {
    id: 32,
    name: "Swiss Butter Cookies",
    category: "cookies",
    price: 350,
    image: [defaultImage],
  },
  {
    id: 33,
    name: "Choco Chip Cookies",
    category: "cookies",
    price: 400,
    image: [defaultImage],
  },
  {
    id: 34,
    name: "Assorted Croissants",
    category: "traditional plumcake",
    price: 820,
    image: [defaultImage],
  },
  {
    id: 39,
    name: "Almond Croissant",
    category: "traditional plumcake",
    price: 440,
    image: [defaultImage],
  },
  {
    id: 42,
    name: "Opera Cake (Slice)",
    category: "traditional plumcake",
    price: 225,
    image: [defaultImage],
  },
  {
    id: 43,
    name: "Opera Cake (Whole)",
    category: "traditional plumcake",
    price: 1200,
    image: [defaultImage],
  },
];

export default products;
