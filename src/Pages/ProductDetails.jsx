import { useParams } from "react-router-dom";
import products from "../Pages/Products";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return (
            <section className="max-w-7xl mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold">Product Not Found</h1>
            </section>
        );
    }

    const discount = Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

    return (
        <section className="bg-gray-100 min-h-screen py-14">

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white rounded-[32px] shadow-2xl border border-gray-200 overflow-hidden">

                    <div className="grid lg:grid-cols-2 gap-12 p-10">

                        <div className="grid md:grid-cols-2 gap-16 items-center">

                            {/* Left Side */}
                            <div className="relative">

                                {/* Discount Badge */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        {discount}% OFF
                                    </span>
                                </div>

                                {/* Product Image */}
                              <div className="bg-white border rounded-3xl shadow-xl p-6">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className=" w-full h-[700px] object-contain p-5 transition-transform duration-500 hover:scale-105 "
                                    />

                                </div>

                            </div>
                            {/* Right Side */}
                            <div>

                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                                    {discount}% OFF
                                </span>

                                <h1 className="text-5xl font-bold mt-4">
                                    {product.name}
                                </h1>

                                <div className="flex items-center gap-2 mt-4">
                                    <FaStar className="text-yellow-500" />
                                    <span>{product.rating}</span>
                                </div>

                                <div className="flex items-center gap-4 mt-6">
                                    <span className="text-4xl font-bold text-yellow-600">
                                        ₹{product.price}
                                    </span>

                                    <span className="line-through text-gray-400 text-xl">
                                        ₹{product.oldPrice}
                                    </span>
                                </div>

                                <h3 className="mt-8 text-xl font-semibold">
                                    Select Size
                                </h3>

                                <div className="flex gap-3 mt-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                <button className="w-full mt-10 bg-black text-white py-4 rounded-xl hover:bg-yellow-500 transition text-lg font-semibold">
                                    Add To Cart
                                </button>

                                <div className="mt-10">
                                    <h3 className="text-2xl font-bold mb-3">
                                        Description
                                    </h3>

                                    <p className="text-gray-600 leading-8">
                                        Premium quality oversized streetwear designed for modern fashion.
                                        Made with soft cotton fabric, comfortable fit, and perfect for
                                        casual wear, daily styling, and trendy outfits.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProductDetails;