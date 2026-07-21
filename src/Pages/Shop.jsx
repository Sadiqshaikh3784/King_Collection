import { useParams } from "react-router-dom";
import products from "../Pages/Products";
import ProductCard from "../Components/ProductCard";

const Shop = () => {

  const { slug } = useParams();

  const filteredProducts = slug
    ? products.filter((product) => product.category === slug)
    : products;

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h1 className="text-5xl font-bold text-center capitalize mb-12">
        {slug ? slug.replace("-", " ") : "All Products"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (
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

export default Shop;