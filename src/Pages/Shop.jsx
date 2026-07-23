import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../Pages/Products";
import ProductCard from "../Components/ProductCard";
import categories from "../data/Categories";


const Shop = () => {
  const { slug } = useParams();

  const [sortBy, setSortBy] = useState("newest");
  const [maxPrice, setMaxPrice] = useState(5000);

  const filteredProducts = useMemo(() => {
    let result = slug
      ? products.filter(
        (product) =>
          product.category === slug &&
          product.price <= maxPrice
      )
      : products.filter(
        (product) => product.price <= maxPrice
      );

    switch (sortBy) {
      case "low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [slug, sortBy, maxPrice]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-4 gap-10">

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-md p-6 sticky top-28">

            <h2 className="text-2xl font-bold mb-6">
              Categories
            </h2>
           

            <ul className="space-y-3">

              <li>
                <Link
                  to="/shop"
                  className={`block px-4 py-2 rounded-lg transition ${!slug
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                    }`}
                >
                  All Products
                </Link>
              </li>

              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/shop/${category.slug}`}
                    className={`block px-4 py-2 rounded-lg transition ${slug === category.slug
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                      }`}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}

            </ul>
             <div className="mt-10">

              <h2 className="text-2xl font-bold mb-5">
                Price
              </h2>

              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-black"
              />

              <p className="mt-3 font-semibold">
                ₹0 - ₹{maxPrice}
              </p>

            </div>

          </div>
        </aside>

        {/* Products */}
        <main className="lg:col-span-3">

          <div className="flex justify-between items-center mb-8">

            <h1 className="text-4xl font-bold capitalize">
              {slug
                ? slug.replace("-", " ")
                : "All Products"}
            </h1>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white"
            >
              <option value="newest">Newest</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-3xl font-bold">
                  No Products Found 😢
                </h2>

                <p className="text-gray-500 mt-3">
                  Try another category.
                </p>
              </div>
            )}

          </div>

        </main>

      </div>
    </section>
  );
};

export default Shop;