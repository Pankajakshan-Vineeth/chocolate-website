import chocochip1 from "../assets/chocochip1.jpg";
import chocochip2 from "../assets/chocochip2.jpg";
import praline1 from "../assets/praline1.jpg";
import praline2 from "../assets/praline2.jpg";
import praline3 from "../assets/praline3.jpg";
import cookies from "../assets/cookies.jpg";

const products = [
  {
    id: 1,
    name: "Truffles & Pralines",
    price: 999,
    image: [praline1, praline2, praline3],
  },
  {
    id: 2,
    name: "Swiss Butter Cookies",
    price: 350,
    image: [cookies], // wrap in array
  },
  {
    id: 3,
    name: "Choco Chip Cookies",
    price: 400,
    image: [chocochip1, chocochip2],
  },

  {
    id: 4,
    name: "Truffles & Pralines",
    price: 999,
    image: [praline1, praline2, praline3],
  },
//   {
//     id: 5,
//     name: "Swiss Butter Cookies",
//     price: 350,
//     image: [cookies],
//   },
//   {
//     id: 6,
//     name: "Choco Chip Cookies",
//     price: 400,
//     image: [chocochip1, chocochip2],
//   },
];

export default products;
