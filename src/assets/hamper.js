import hamper_1 from './hamper_1.png'
import hamper_2 from './hamper_2.png'
import gift_card from './gift_card.png'
import shoe from './shoe.jpg'


const products = [
  {
    id: 1,
    name: "CUSTOMISED HAMPER",
    category: "hamper",
    price: 3500.0,
    image: [hamper_1],
  },
  {
    id: 2,
    name: "EXCLUSIVE GIFT CARD",
    category: "hamper",
    price: 1000.0,
    image: [gift_card],
  },
  {
    id: 3,
    name: "CHOCOLATE SHAPES & FIGURES",
    category: "hamper",
    price: 1200.0,
    image: {shoe},
  },
  {
    id: 4,
    name: "BOX OF 24 EXCLUSIVE BELGIAN CHOCOLATES",
    category: "hamper",
    price: 2125.0,
    image: [hamper_2]
  },
  {
    id: 5,
    name: "CHOCOLATE SHAPES & FIGURES",
    category: "hamper",
    price: 1200.0,
    image: {shoe},
  },
  {
    id: 6,
    name: "BOX OF 24 EXCLUSIVE BELGIAN CHOCOLATES",
    category: "hamper",
    price: 2125.0,
    image: [hamper_2]
  },
];

export default products;
