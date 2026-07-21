
import { Link } from "react-router-dom";
const CategoryCard = ({ title, image, slug }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-500"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

        <h2 className="text-white text-3xl font-bold tracking-wide mb-4">
          {title}
        </h2>

       <Link
  to={`/shop/${slug}`}
  className="
    opacity-0
    translate-y-6
    group-hover:opacity-100
    group-hover:translate-y-0
    transition-all
    duration-500
    bg-white
    text-black
    px-6
    py-2
    rounded-full
    font-semibold
    hover:bg-yellow-500
    hover:text-white
  "
>
  Shop Now →
</Link>
      </div>

    </div>
  );
};

export default CategoryCard;