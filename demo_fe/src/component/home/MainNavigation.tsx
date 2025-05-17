import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ProductItem from "../../component/home/ProductItem";
import { getBestSellingProducts } from "../../service/apiService";
import { Product } from "../../type/UserType";

export const MainNavigation = () => {
  const [showProducts, setShowProducts] = useState(false);


  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getBestSellingProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <nav className="bg-white text-black border-y border-[#e0e0e0] relative z-50">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="py-3 px-4 bg-blue-600 text-white">
            <button className="flex items-center space-x-2">
              <span>Shop By Categories</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="flex ml-6 relative">
            <div
              className="relative"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <a className="py-3 px-4 hover:bg-blue-600 hover:text-white flex items-center cursor-pointer">
                Products <ChevronDown size={16} className="ml-1" />
              </a>

              {showProducts && (
                <div className="absolute left-0 top-full mt-1 w-[1000px] bg-white p-6 rounded shadow-xl grid grid-cols-5 gap-6 z-50">
                  {products.map((item, index) => (
                    <ProductItem
                      key={item.id}
                      title={item.name}
                      image={item.image || "/default.jpg"}
                      rating={4}
                      salePrice={item.price.toLocaleString()}
                      originalPrice={item.oldPrice?.toLocaleString()} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// import { ChevronDown } from "lucide-react";
// import { useState } from "react";

// export const MainNavigation = () => {
//   const [showProductsModal, setShowProductsModal] = useState(false);

//   return (
//     <nav className="bg-white text-black border-y border-[#e0e0e0] relative z-50">
//       <div className="container mx-auto">
//         <div className="flex items-center">
//           <div className="py-3 px-4 bg-blue-600 text-white">
//             <button className="flex items-center space-x-2">
//               <span>Shop By Categories</span>
//               <ChevronDown size={16} />
//             </button>
//           </div>

//           <div className="flex ml-6 relative">
//             <a href="#" className="py-3 px-4 bg-blue-600 text-white">
//               Home
//             </a>
//             <a href="#" className="py-3 px-4 hover:bg-blue-600 hover:text-white">
//               Shop
//             </a>
//             <a href="#" className="py-3 px-4 hover:bg-blue-600 hover:text-white flex items-center">
//               Categories <ChevronDown size={16} className="ml-1" />
//             </a>

//             {/* PRODUCTS with Modal */}
//             <div
//               className="relative"
//               onMouseEnter={() => setShowProductsModal(true)}
//               onMouseLeave={() => setShowProductsModal(false)}
//             >
//               <a
//                 href="#"
//                 className="py-3 px-4 hover:bg-blue-600 hover:text-white flex items-center"
//               >
//                 Products <ChevronDown size={16} className="ml-1" />
//               </a>

//               {showProductsModal && (
//                 <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg border rounded z-50 p-4">
//                   <h3 className="text-sm font-semibold mb-2">Featured Products</h3>
//                   <ul className="text-sm space-y-2">
//                     <li className="hover:underline cursor-pointer">Vitamin C 500mg</li>
//                     <li className="hover:underline cursor-pointer">Paracetamol</li>
//                     <li className="hover:underline cursor-pointer">Tiffy Cough Relief</li>
//                     <li className="hover:underline cursor-pointer">Amoxicillin</li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <a href="#" className="py-3 px-4 hover:bg-blue-600 hover:text-white">
//               Top Deals
//             </a>
//             <a href="#" className="py-3 px-4 hover:bg-blue-600 hover:text-white flex items-center">
//               Elements <ChevronDown size={16} className="ml-1" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
