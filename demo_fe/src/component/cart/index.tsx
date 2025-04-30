import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
// import * as service from "../../service/apiService";

// Define TypeScript interfaces
interface Product {
  id: number;
  nameProduct: string;
  price: number;
  img: string;
  colors: {
    id: number;
    nameColor: string;
  };
}

interface CartItem {
  id: number;
  amount: number;
  price: number;
  products: Product;
}

export function Cart() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const [shopping, setShopping] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantityCard, setQuantityCard] = useState<number>(0);

  // Mock data for demonstration
  const mockCartItems: CartItem[] = [
    {
      id: 1,
      amount: 1,
      price: 650,
      products: {
        id: 101,
        nameProduct: "Hermès Stairs Beach Towel",
        price: 650,
        img: "https://via.placeholder.com/150x200?text=Towel",
        colors: {
          id: 1,
          nameColor: "blue"
        }
      }
    },
    {
      id: 2,
      amount: 2,
      price: 400,
      products: {
        id: 102,
        nameProduct: "Silk Scarf",
        price: 200,
        img: "https://via.placeholder.com/150x200?text=Scarf",
        colors: {
          id: 2,
          nameColor: "red"
        }
      }
    }
  ];

  // Mock API functions
  const getAllShopping = async () => {
    // Simulate API call
    setShopping(mockCartItems);
    setQuantityCard(mockCartItems.length);
    
    // Calculate total price
    let total = 0;
    mockCartItems.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  const calculate = async (id: number, index: number, productId: number, idColor: number) => {
    // Simulate quantity update
    const updatedShopping = shopping.map(item => {
      if (item.id === id) {
        const newAmount = index === 0 ? Math.max(1, item.amount - 1) : item.amount + 1;
        const unitPrice = item.price / item.amount;
        return {
          ...item,
          amount: newAmount,
          price: unitPrice * newAmount
        };
      }
      return item;
    });
    
    setShopping(updatedShopping);
    
    // Recalculate total price
    let total = 0;
    updatedShopping.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  const deleteById = async (id: number) => {
    const updatedShopping = shopping.filter(item => item.id !== id);
    setShopping(updatedShopping);
    setQuantityCard(updatedShopping.length);
    
    // Recalculate total price
    let total = 0;
    updatedShopping.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  const deleteShopping = (id: number, nameProduct: string, productId: number) => {
    Swal.fire({
      icon: "warning",
      title: `Do you want to delete "${nameProduct}"?`,
      showCancelButton: true,
      confirmButtonText: "OK"
    }).then(async (isDelete) => {
      if (isDelete.isConfirmed) {
        deleteById(id);
        Swal.fire({
          icon: "success",
          title: "SUCCESSFULLY",
          timer: 2000
        });
      }
    });
  };

  const historyOrder = async () => {
    // Simulate API call for order history
    toast.success("Your order has been placed successfully!");
    setShopping([]);
    setTotalPrice(0);
    setQuantityCard(0);
  };

  useEffect(() => {
    getAllShopping();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">
              You have {quantityCard} items in your cart
            </h2>
            
            {/* Cart Items */}
            <div className="space-y-6">
              {shopping.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row bg-white p-4 rounded-lg shadow-sm">
                  {/* Product Image */}
                  <div className="sm:w-1/4 mb-4 sm:mb-0">
                    <img 
                      src={item.products.img} 
                      alt={item.products.nameProduct}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="sm:w-3/4 sm:pl-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium text-lg">{item.products.nameProduct}</h3>
                      <button 
                        onClick={() => deleteShopping(item.id, item.products.nameProduct, item.products.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="mb-3 sm:mb-0">
                        <p className="text-gray-600">Color: {item.products.colors.nameColor}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          disabled={item.amount === 1}
                          className={`px-3 py-1 ${item.amount === 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                          onClick={() => calculate(item.id, 0, item.products.id, item.products.colors.id)}
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-l border-r border-gray-300">{item.amount}</span>
                        <button
                          className="px-3 py-1 text-gray-700 hover:bg-gray-100"
                          onClick={() => calculate(item.id, 1, item.products.id, item.products.colors.id)}
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="font-medium text-lg mt-3 sm:mt-0">
                        ${item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {shopping.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
                <button 
                  onClick={() => navigate("/products")}
                  className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Continue Shopping
                </button>
              </div>
            )}
            
            {/* Order Summary */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center py-3 border-t border-gray-200">
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm text-gray-500">Shipping costs will be calculated during checkout</p>
                </div>
                <p>-</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-t border-gray-200">
                <div>
                  <p className="font-medium">Taxes</p>
                  <p className="text-sm text-gray-500">Taxes will be calculated during checkout</p>
                </div>
                <p>-</p>
              </div>
              
              <div className="flex justify-between items-center py-3 border-t border-b border-gray-200 font-bold">
                <p>TOTAL</p>
                <p>${totalPrice}</p>
              </div>
            </div>
            
            {/* Checkout Button */}
            {shopping.length > 0 && (
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={historyOrder}
                  className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800"
                  disabled={!token}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Section - Info */}
        <div className="w-full lg:w-1/3">
          {/* Orange Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-medium mb-4">The orange box</h2>
            <div className="flex items-center">
              <div className="w-1/3">
                <img 
                  src="https://assets.hermes.com/is/image/hermesedito/orange-box?name=orange-box&end" 
                  alt="Orange Box"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-2/3 pl-4">
                <p className="text-gray-700">
                  All orders are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items
                </p>
              </div>
            </div>
          </div>
          
          {/* Customer Service */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-medium mb-4">Customer Service</h2>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">+84 782 391 943</span>
              </div>
              <p className="text-gray-600 ml-7">Monday to Friday: 9am - 6pm EST</p>
              <p className="text-gray-600 ml-7">Saturday: 10am - 6pm EST</p>
            </div>
            
            {/* Service Methods */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <p className="font-medium">Standard</p>
                <p className="text-sm">delivery</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <p className="font-medium">Returns &</p>
                <p className="text-sm">exchanges</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="font-medium">Shop</p>
                <p className="text-sm">securely</p>
              </div>
            </div>
            
            {/* Payment Section */}
            <div className={`mt-6 ${!token ? 'opacity-50 pointer-events-none' : ''}`}>
              <button 
                onClick={token ? historyOrder : () => {
                  Swal.fire({
                    icon: "warning",
                    title: "You need to login to pay!",
                    text: "Please login to continue with checkout",
                    confirmButtonText: "OK"
                  });
                }}
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
                disabled={!token || shopping.length === 0}
              >
                Pay with PayPal
              </button>
              
              <div className="mt-4 text-center">
                <img
                  src="https://www.paypalobjects.com/marketing/web/vn/manage-my-paypal-account/PP-AcceptanceMarkTray-NoDiscover-243x40-optimised.png"
                  alt="PayPal Acceptance Mark"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}