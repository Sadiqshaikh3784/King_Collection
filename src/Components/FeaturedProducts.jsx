import products from "../Pages/Products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
          Featured Collection
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover our latest streetwear collection crafted for modern men.
          Premium quality, bold designs and everyday comfort.
        </p>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <ProductCard
            key={product.id}
             id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            sizes={product.sizes}
            isNew={product.isNew}
            inStock={product.inStock}
          />

        ))}

      </div>

    </section>
  );
};

export default FeaturedProducts;