import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

import * as service from "../../service/apiService";
import { FaShieldAlt, FaCoins, FaShippingFast } from "react-icons/fa";
import TabsPolicy from "../../util/CustomTabPanel";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../../redux/store";
import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "../../type/UserType";


const ProductDetail: React.FC = () => {


  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const productId = useMemo(() => product?.id, [product?.id]);

  const quantity = useSelector((state: RootState) => {
    const found = state.cart.cartItems.find(item => item.productId === productId);
    return found?.quantity || 1;
  });

  console.log(productId, quantity, "000000000000")
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  if (!id) return;

  const handleIncrement = () => {
    if (productId) dispatch({ type: INCREMENT_QUANTITY, payload: productId});
  };

  const handleDecrement = () => {
    if (productId) dispatch({ type: DECREMENT_QUANTITY, payload: productId});
  };


  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const res = await service.detailProduct(Number(id));
        setProduct(res);
        setSelectedImage(res.images?.[0]?.url);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!product) {
      toast.error("Product not found.");
      return;
    }
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url || "",
        quantity: 1, // hoặc quantity nếu muốn lấy state hiện tại
      }
    }
    );

    toast.success("Item added to cart.");
  };




  if (!product || !product.id) return null;


  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-row gap-4 detail-page-container">
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
            {product?.images?.length > 0 ? (
              product.images.map((img: { id: number; url: string }, index: number) => (
                <img
                  key={img.id ?? index}
                  src={img.url}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover border rounded cursor-pointer ${selectedImage === img.url ? "ring-2 ring-blue-500" : ""
                    }`}
                  onClick={() => setSelectedImage(img.url)}
                />
              ))
            ) : (
              <div className="text-gray-400 text-sm">Không có hình ảnh</div>
            )}
          </div>

          <div className="flex-1 flex justify-center items-center h-[400px]">
            <img
              src={selectedImage}

              alt="Selected"
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded w-fit">-13%</span>
          <p className="text-sm text-gray-500">
            Brand: <span className="text-blue-600 underline cursor-pointer">Creative</span>
          </p>
          <h2 className="text-2xl font-bold">{product?.name}</h2>

          <div className="flex items-center gap-3">
            <span className="text-gray-500 line-through text-3xl">${product?.price}</span>
            <span className="text-green-600 text-3xl font-bold">${product?.price}</span>
          </div>


          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Clear and organized storage for your medication.</li>
            <li>Helps you stay consistent with your dosage schedule.</li>
            <li>Designed to support daily and weekly medication routines.</li>
          </ul>

          <div className="flex items-center gap-x-3">
            <div className="flex items-center rounded-xl px-4 py-2 bg-gray-100 w-fit">
              <button
                type="button"
                onClick={handleIncrement}
                className="px-2 text-lg"
              >
                –
              </button>

              <span className="mx-3 w-6 text-center">{quantity}</span>

              <button
                type="button"
                onClick={handleDecrement}
                className="px-2 text-lg"
              >
                +
              </button>

            </div>

            <button onClick={handleAddToCart} type="button" className="bg-blue-700 text-white py-3 w-[20rem] rounded-full text-sm hover:bg-blue-800">Add To Cart</button>
          </div>

          <button type="button" className="bg-blue-700 text-white py-3 w-[38rem] rounded-full text-sm hover:bg-blue-800">Buy Now</button>

          {/* <div className="flex gap-4 text-sm text-gray-600">
            <span>✔ Compare</span>
            <span>♥ Wishlist</span>
            <span>❓ Ask Us</span>
            <span>🔗 Share</span>
          </div> */}

          <hr className="text-gray-200" />
          <div className="text-sm text-gray-700 mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1"><FaShieldAlt /></span>
              <p><strong>Estimated Delivery:</strong> Up to 4 business days</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-1"><FaShippingFast /></span>
              <p><strong>Free Shipping & Returns:</strong> On all orders over $200</p>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded text-center">
            <p className="text-sm font-medium text-gray-600 mb-2">Guaranteed Safe And Secure Checkout</p>
            <div className="flex justify-center gap-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmFfOlhWAYsihPTeJy8phAfPDYq905ZQKag&s" className="h-8" alt="visa" />
              <img src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" className="h-8" alt="vnpay" />
              <img src="https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png" className="h-8" alt="momo" />
              <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" className="h-8" alt="paypal" />
            </div>
          </div>

          <div className="flex justify-between gap-0 bg-indigo-50 rounded border border-indigo-100 overflow-hidden">
            <div className="flex items-center justify-center gap-2 w-1/3 py-4 border-r border-indigo-200">
              <FaShieldAlt className="text-indigo-700 text-xl" />
              <span className="text-sm font-medium text-indigo-900">101% Original</span>
            </div>
            <div className="flex items-center justify-center gap-2 w-1/3 py-4 border-r border-indigo-200">
              <FaCoins className="text-indigo-700 text-xl" />
              <span className="text-sm font-medium text-indigo-900">Lowest Price</span>
            </div>
            <div className="flex items-center justify-center gap-2 w-1/3 py-4">
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
