import React, { useState } from "react";
import { FaHeart, FaExchangeAlt, FaGift } from 'react-icons/fa';
import shipping from "../../assets/free-shipping.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "../../type/UserType";
const CartPage = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => {
    return state.cart.cartItems;
  });

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Omron HEM 7120 Fully Automatic Digital Monitor",
      price: 20,
      quantity: 1,
      image: "/images/omron.png",
    },
    {
      id: 2,
      name: "Easycare Big Display Digital Blood Pressure Monitor",
      price: 14.4,
      quantity: 1,
      image: "/images/easycare.png",
    },
  ]);
  const [shipping, setShipping] = useState(5);

  const updateQuantity = (id: any, delta: any) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
  

  const handleIncrement = (productId: number) => {
      dispatch({ type: INCREMENT_QUANTITY, payload: productId});
    };
  
    const handleDecrement = (productId: number) => {
      dispatch({ type: DECREMENT_QUANTITY, payload: productId});
    };


  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + shipping;
  const remainingForFreeShipping = 100 - subtotal;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <h1 className="text-xl font-semibold mb-4">Cart Summary</h1>

        <div className="bg-[#e6f7e6] text-[#2a7a25] p-3 rounded flex justify-between items-center">
          <span>
            Use <strong>GET20OFF</strong> coupon code to get 20% off on minimum order above $100
          </span>
          <button className="bg-[#e6f7e6] text-[rgb(42, 122, 37)] rounded-3xl px-4 py-1 border">GET20OFF</button>
        </div>


        {/* Product List */}
        {/* <div className="divide-y mt-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center py-4 gap-4">
              <button className="text-red-500">&times;</button>
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border rounded" />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
              </div>
              <div className="w-20 text-right text-green-600 font-semibold">${item.price.toFixed(2)}</div>
              <div className="flex items-center border px-2 rounded">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <div className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div> */}
        <table className="w-full mt-4 table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-sm font-semibold border-b">
              <th className="pb-2">Product</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.productId} className="align-middle">
                {/* Product (xóa + ảnh + tên) */}
                <td className="flex items-center gap-4">
                  <button className="text-red-500 text-xl">&times;</button>
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border rounded" />
                  <span className="text-sm font-medium">{item.name}</span>
                </td>

                {/* Price */}
                <td className="text-green-600 font-semibold">${item.price.toFixed(2)}</td>

                {/* Quantity */}
                <td >
                  <div className="flex items-center h-10  rounded " style={{backgroundColor: "rgb(247, 247, 247)",justifyContent: "center"}}>
                    <button type="button" className="minus px-2" onClick={() => handleDecrement(item.productId)}>
                      −
                    </button>
                    <div className="flex items-center" style={{width: "2rem",justifyContent: "center"}}>{item.quantity}</div>
                    <button type="button" className="plus px-2" onClick={() => handleIncrement(item.productId)}>
                      +
                    </button>
                  </div>
                </td>

                {/* Subtotal */}
                <td className="font-semibold text-right">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3  text-center">
          {/* Loved by Thousands */}
          <div style={{ backgroundColor: "#F3F4FC", borderRightColor: "#F3F4FC" }} className="bg-white shadow-md border-r  p-6 flex flex-col items-center">
            <FaHeart className="text-indigo-600 text-3xl mb-3" />
            <h4 className="text-lg font-semibold mb-1">Loved by Thousands</h4>
            <p className="text-sm text-gray-600">Join Thousands of Happy and Satisfied Customers!</p>
          </div>

          {/* Easy Returns */}
          <div style={{ backgroundColor: "#F3F4FC", borderRightColor: "#F3F4FC" }} className="bg-white shadow-md border-r p-6 flex flex-col items-center">
            <FaExchangeAlt className="text-indigo-600 text-3xl mb-3" />
            <h4 className="text-lg font-semibold mb-1">Easy Returns</h4>
            <p className="text-sm text-gray-600">Enjoy Hassle-Free Returns and Exchanges – Shop Now!</p>
          </div>

          {/* Order Now & Get Gift! */}
          <div style={{ backgroundColor: "#F3F4FC" }} className="bg-white shadow-md  p-6 flex flex-col items-center">
            <FaGift className="text-indigo-600 text-3xl mb-3" />
            <h4 className="text-lg font-semibold mb-1">Order Now & Get Gift!</h4>
            <p className="text-sm text-gray-600">Order & Receive a Special Gift. Limited Time Only!</p>
          </div>
        </div>
      </div>

      {/* Right Section */}

      <div>
        <div className=" mt-4 mb-4  text-sm text-yellow-700 border-dashed border-2 gap-2 border-yellow-300 p-8 roundedmb-6">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-yellow-400" style={{ width: '48.8%' }}></div>
          </div>
          <div className="relative flex justify-center">
            <div className="tmcore-fsb-progress">
              <div className="tmcore-fsb-progress-bar">
                <div className="tmcore-fsb-icon absolute -top-3 w-8 h-8 bg-white border-2 border-yellow-400 rounded-full flex items-center justify-center">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
                    <path d="M0 6v2h19v15h-6.156c-0.445-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-1.156v-5h-2v7h3.156c0.445 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h8.313c0.445 1.719 1.992 3 3.844 3s3.398-1.281 3.844-3h3.156v-8.156l-0.063-0.156-2-6-0.219-0.688h-8.719v-4zM1 10v2h9v-2zM21 12h7.281l1.719 5.125v5.875h-1.156c-0.445-1.719-1.992-3-3.844-3s-3.398 1.281-3.844 3h-0.156zM2 14v2h6v-2zM9 22c1.117 0 2 0.883 2 2s-0.883 2-2 2c-1.117 0-2-0.883-2-2s0.883-2 2-2zM25 22c1.117 0 2 0.883 2 2s-0.883 2-2 2c-1.117 0-2-0.883-2-2s0.883-2 2-2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center pt-2">
            Add items worth <span className="font-semibold text-black">$51.20</span> for <strong>FREE Delivery!</strong>
          </p>
        </div>
        <div className=" p-4 rounded bg-[#f7f7f7]">

          <h2 className="text-xl font-semibold mb-4">Cart totals</h2>
          <div className="w-full text-sm text-gray-700 mb-6">
            <div>
              <div className=" flex text-center" style={{ justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #eeeeee" }}>
                <div className=" text-left " style={{ fontSize: "18px", color: "black", fontWeight: "700" }} >Subtotal</div>
                <div className=" text-right " style={{ color: "#33a58e", fontSize: "16px", fontWeight: "bold" }}>$48.80</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", padding: "16px 0", borderBottom: "1px solid #eeeeee" }}>
                <div className="py-2 text-left font-bold" style={{ fontSize: "16px" }} >Shipping</div>
                <div className="py-2 text-right" >
                  <div className="flex flex-col items-end ">
                    <label className="flex items-center justify-between w-full text-sm">
                      <span className="flex items-center gap-2">
                        <input type="radio" name="shipping" defaultChecked /> Flat rate:
                      </span>
                      <span className="" style={{ color: "#33a58e", fontSize: "15px", fontWeight: "400px" }}>$5</span>
                    </label>
                    <label className="flex items-center justify-between w-full text-sm">
                      <span className="flex items-center gap-2">
                        <input type="radio" name="shipping" /> Local pickup:
                      </span>
                      <span className="" style={{ color: "#33a58e", fontSize: "15px", fontWeight: "400px" }}>$10</span>
                    </label>
                  </div>
                  <div className="flex text-center " style={{ justifyContent: "space-between", margin: "25px 0 15px 0", fontSize: "15px", color: "black" }}>
                    <p className="text-xs text-gray-500">Shipping to <strong>Gujarat</strong>.</p>
                  </div>
                  <a href="#" className="text-blue-600 text-xs">Change address</a>
                </div>
              </div>
              <div className="flex text-center" style={{ justifyContent: "space-between", padding: "16px 0" }}>
                <div className=" text-left " style={{ fontSize: "18px", color: "black", fontWeight: "700" }}>Total</div>
                <div className=" text-right " style={{ color: "#33a58e", fontSize: "16px", fontWeight: "bold" }}>$53.80</div>
              </div>
            </div>
          </div>

          <button className="bg-[#2b57a2] w-full mt-4 text-white py-2 rounded-3xl hover:bg-[#33a58e]">
            Proceed To Checkout
          </button>

          <p className="text-center  text-sm text-black-700 mt-10">Guaranteed Safe And Secure Checkout</p>
          <div className="flex justify-center gap-2 mt-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmFfOlhWAYsihPTeJy8phAfPDYq905ZQKag&s" className="h-8" alt="visa" />
            <img src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg" className="h-8" alt="paypal" />
            <img src="https://developers.momo.vn/v3/assets/images/square-8c08a00f550e40a2efafea4a005b1232.png" className="h-8" alt="amex" />
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" className="h-8" alt="discover" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default CartPage;
