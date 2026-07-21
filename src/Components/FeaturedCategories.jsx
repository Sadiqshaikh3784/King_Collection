import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Shop By Category
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
          />
        ))}

      </div>

    </section>
  );
};

export default FeaturedCategories;