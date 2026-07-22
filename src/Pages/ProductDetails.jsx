import { useParams } from "react-router-dom";
import products from "../Pages/Products";
import { FaStar } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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
     <section className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">


           <div className="w-full max-w-4xl px-4">

               <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-h-[85vh] overflow-y-auto">
                <button
  onClick={() => navigate(-1)}
  className="
    absolute
    top-5
    right-5
    w-10
    h-10
    rounded-full
    bg-gray-100
    hover:bg-black
    hover:text-white
    transition
    flex
    items-center
    justify-center
  "
>
  <FaTimes />
</button>

                  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">

                            {/* Left Side */}
                            <div className="relative">

                                {/* Discount Badge */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        {discount}% OFF
                                    </span>
                                </div>

                                {/* Product Image */}
                              <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-lg p-8">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="
w-full
h-[360px]
object-contain
p-6
transition
duration-500
hover:scale-105 
"
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

                                    <p className="text-gray-600 leading-6">
                                        Premium quality oversized streetwear designed for modern fashion.
                                        Made with soft cotton fabric, comfortable fit, and perfect for
                                        casual wear, daily styling, and trendy outfits.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
    

        </section>
    );
};

export default ProductDetails;