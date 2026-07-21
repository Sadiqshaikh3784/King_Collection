import tshirtsCategoryImage from "../assets/Images/categories/tshirts/cover.jpg";
import shirtsCategoryImage from "../assets/Images/categories/shirts/cover.jpg";
import baggyJeansCategoryImage from "../assets/Images/categories/pents/cover.jpg";
import cargoPantsCategoryImage from "../assets/Images/categories/cargo/cover.jpg";
import hoodiesCategoryImage from "../assets/Images/categories/hoodies/cover.jpg";
import accessoriesCategoryImage from "../assets/Images/categories/accessories/cover.jpg";


const categories = [
  {
    id: 1,
    title: "T-Shirts",
    image: tshirtsCategoryImage,
    slug: "tshirts",
  },
  {
    id: 2,
    title: "Shirts",
    image: shirtsCategoryImage,
    slug: "shirts",
  },
  {
    id: 3,
    title: "Baggy Jeans",
    image: baggyJeansCategoryImage,
    slug: "baggy-jeans",
  },
 {
    id: 4,
    title: "Cargo Pants",
    image: cargoPantsCategoryImage,
    slug: "cargo-pants",
  },
  {
    id: 5,
    title: "Hoodies",
    image: hoodiesCategoryImage,
    slug: "hoodies",
  },
  {
    id: 6,
    title: "Accessories",
    image: accessoriesCategoryImage,
    slug: "accessories",
  },
];

export default categories;