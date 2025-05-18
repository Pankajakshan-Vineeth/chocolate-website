import trufflecake1 from "./trufflecake1.jpg";
import trufflecake3 from "./trufflecake3.jpg";
import trufflecake4 from "./trufflecake4.jpg";
import orange_almond from "./orange_almond.webp";
import opera from "./opera.jpg";
import mouse from "./mouse.jpg";
import berry from "./berry.jpg";
import cold_chocolate1 from "./cold_choc1.jpg";
import cold_chocolate2 from "./cold_choc2.jpg";
import strawberry from "./strawberry.jpg";
import eggless1 from "./eggless1.jpg";
import eggless2 from "./eggless2.jpg";
import eggless3 from "./eggless3.jpg";
import eggless4 from "./eggless4.jpg";
import eggless5 from "./eggless5.jpg";

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
];

export default products;
