import { Hero } from "../Components/Hero"
import FeaturedCategories from "../Components/FeaturedCategories"
import FeaturedProducts from "../Components/FeaturedProducts";

export const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  )
}
