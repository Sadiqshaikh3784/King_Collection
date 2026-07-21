import t1 from "../assets/Images/categories/tshirts/t1.jpeg";
import t2 from "../assets/Images/categories/tshirts/t2.jpeg";
import t3 from "../assets/Images/categories/tshirts/t3.jpeg";
import p1 from "../assets/Images/categories/pents/p1.jpeg";

const products = [
  {
    id: 1,
    name: "Black Oversized Tee",
    category: "tshirts",
    price: 999,
    oldPrice: 1499,
    rating: 4.8,
    sizes: ["S", "M", "L", "XL"],
    image: t1,
    isNew: true,
    inStock: true,
  },

  {
    id: 2,
    name: "White Oversized Tee",
    category: "tshirts",
    price: 1099,
    oldPrice: 1599,
    rating: 4.7,
    sizes: ["S", "M", "L", "XL"],
    image: t2,
    isNew: false,
    inStock: true,
  },

  {
    id: 3,
    name: "Anime Graphic Tee",
    category: "tshirts",
    price: 1199,
    oldPrice: 1699,
    rating: 4.9,
    sizes: ["S", "M", "L", "XL"],
    image: t3,
    isNew: true,
    inStock: true,
  },

  {
    id: 4,
    name: "Blue Baggy Jeans",
    category: "baggy-jeans",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    sizes: ["30", "32", "34", "36"],
    image: p1,
    isNew: true,
    inStock: true,
  },
  
];

export default products;