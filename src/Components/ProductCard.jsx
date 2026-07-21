import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  name,
  price,
  oldPrice,
  rating,
  sizes,
  isNew,
  inStock,
}) => {

  // Auto Discount Calculate
  const discount = Math.round(
    ((oldPrice - price) / oldPrice) * 100
  );

  return (
    <Link to={`/product/${id}`}>

      <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">

        {/* Product Image */}
        <div className="relative overflow-hidden">

          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Discount Badge */}
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            {discount}% OFF
          </span>

          {/* New Badge */}
          {isNew && (
            <span className="absolute top-14 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              NEW
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-black hover:text-white transition"
          >
            <FaRegHeart />
          </button>

        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Product Name */}
          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-gray-600">{rating}</span>
          </div>

          {/* Sizes */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {sizes.map((size) => (
              <span
                key={size}
                className="border px-2 py-1 rounded text-sm hover:bg-black hover:text-white transition cursor-pointer"
              >
                {size}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-yellow-600">
              ₹{price}
            </span>

            <span className="line-through text-gray-400">
              ₹{oldPrice}
            </span>
          </div>

          {/* Add To Cart */}
          <button
            disabled={!inStock}
            onClick={(e) => e.preventDefault()}
            className={`w-full mt-5 py-3 rounded-lg font-semibold transition ${
              inStock
                ? "bg-black text-white hover:bg-yellow-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {inStock ? "Add To Cart" : "Out of Stock"}
          </button>

        </div>

      </div>

    </Link>
  );
};

export default ProductCard;