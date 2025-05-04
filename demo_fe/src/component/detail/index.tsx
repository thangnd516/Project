import React, { useState } from "react";
import "./index.scss"
const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
];
import { FaShieldAlt, FaCoins, FaShippingFast } from 'react-icons/fa';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabsPolicy from "../../util/CustomTabPanel";
const ProductDetail: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left image section */}
                <div className="flex flex-row gap-4 detail-page-container">
                    <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover border rounded cursor-pointer ${selectedImage === img ? "ring-2 ring-blue-500" : ""
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>

                    <div className="flex-1 flex justify-center items-center h-[400px]">

                        <img src={selectedImage} alt="Selected" className="max-h-[400px] object-contain" />

                    </div>


                </div>


                {/* Right content */}
                <div className="flex flex-col gap-4">
                    <span className="text-sm bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded w-fit">
                        -13%
                    </span>
                    <p className="text-sm text-gray-500">
                        Brand: <span className="text-blue-600 underline cursor-pointer">Creative</span>
                    </p>
                    <h2 className="text-2xl font-bold">Himalaya Baby Body Lotion 400 ml Pack Of 2</h2>

                    <div className="flex items-center gap-3">
                        <span className="text-gray-500 line-through  text-3xl ">$9.20</span>
                        <span className="text-green-600 text-3xl font-bold">$8</span>
                    </div>

                    <p className="text-red-500">13 products sold in last 6 hours</p>

                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Clear and organized storage for your medication.</li>
                        <li>Helps you stay consistent with your dosage schedule.</li>
                        <li>Designed to support daily and weekly medication routines.</li>
                    </ul>


                    {/* Quantity & Add to Cart */}
                    <div className="flex items-center gap-x-3">
                        <div className="flex items-center  rounded-xl px-4 py-2 bg-gray-100 w-fit">
                            <button
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-2 text-lg"
                            >
                                –
                            </button>
                            <span className="mx-3 w-6 text-center">{quantity}</span>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-2 text-lg"
                            >
                                +
                            </button>
                        </div>

                        <button
                            type="button"
                            className="bg-blue-700 text-white py-3 w-[20rem] rounded-full text-sm hover:bg-blue-800"
                        >
                            Add To Cart
                        </button>

                    </div>
                    <button
                        type="button"
                        className=" bg-blue-700 text-white py-3  w-[38rem] rounded-full text-sm hover:bg-blue-800"
                    >
                        Buy Now
                    </button>

                    {/* Compare, wishlist, etc */}
                    <div className="flex gap-4 text-sm text-gray-600">
                        <span>✔ Compare</span>
                        <span>♥ Wishlist</span>
                        <span>❓ Ask Us</span>
                        <span>🔗 Share</span>
                    </div>

                    {/* Info */}
                    <hr style={{ color: "#eeeeee" }}></hr>
                    <div className="text-sm text-gray-700 mt-4 space-y-2">
                        <div className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.739 3.061l-5.5-3c-.075-.041-.157-.061-.239-.061s-.165.02-.239.061l-5.5 3A.5.5 0 002 3.5v4c0 2.2.567 3.978 1.735 5.437.912 1.14 2.159 2.068 4.042 3.01.07.035.147.053.224.053s.153-.018.224-.053c1.883-.942 3.13-1.87 4.042-3.01C13.433 11.978 14 10.2 14 8v-4a.5.5 0 00-.261-.439zM6.5 11.296l-2.796-2.796.796-.795 2 2 5-5 .796.795-5.796 5.796z" />
                                </svg>
                            </span>
                            <p>
                                <strong>Estimated Delivery:</strong> Up to 4 business days
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.739 3.061l-5.5-3c-.075-.041-.157-.061-.239-.061s-.165.02-.239.061l-5.5 3A.5.5 0 002 3.5v4c0 2.2.567 3.978 1.735 5.437.912 1.14 2.159 2.068 4.042 3.01.07.035.147.053.224.053s.153-.018.224-.053c1.883-.942 3.13-1.87 4.042-3.01C13.433 11.978 14 10.2 14 8v-4a.5.5 0 00-.261-.439zM6.5 11.296l-2.796-2.796.796-.795 2 2 5-5 .796.795-5.796 5.796z" />
                                </svg>
                            </span>
                            <p>
                                <strong>Free Shipping & Returns:</strong> On all orders over $200
                            </p>
                        </div>
                    </div>


                    {/* Payment Logos */}
                    <div className="mt-6 bg-gray-100 p-4 rounded text-center">
                        <p className="text-sm font-medium text-gray-600 mb-2">
                            Guaranteed Safe And Secure Checkout
                        </p>
                        <div className="flex justify-center gap-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmFfOlhWAYsihPTeJy8phAfPDYq905ZQKag&s" className="h-8" alt="visa" />
                            <img src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" className="h-8" alt="paypal" />
                            <img src="https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png" className="h-8" alt="amex" />
                            <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" className="h-8" alt="discover" />
                        </div>
                    </div>
                    <div className=" flex justify-between gap-0  bg-indigo-50 rounded border border-indigo-100 overflow-hidden">
                        <div className="flex items-center justify-center gap-2 w-1/3 py-4 border-r border-indigo-200">
                            <FaShieldAlt className="text-indigo-700 text-xl" />
                            <span className="text-sm font-medium text-indigo-900">101% Original</span>
                        </div>
                        <div className="  flex items-center justify-center gap-2 w-1/3 py-4 border-r border-indigo-200">
                            <FaCoins className="text-indigo-700 text-xl" />
                            <span className="text-sm font-medium text-indigo-900">Lowest Price</span>
                        </div>
                        <div className=" flex items-center justify-center gap-2 w-1/3 py-4">
                            <FaShippingFast className="text-indigo-700 text-xl" />
                            <span className="text-sm font-medium text-indigo-900">Free Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
            <TabsPolicy />
        </>

    );
};

export default ProductDetail;
