// import React from 'react';

// type FeatureItemProps = {
//   title: string;
//   hasDiscount?: boolean;
//   subtitle?: string;
//   image?: string;
// };

// const FeatureItem: React.FC<FeatureItemProps> = ({ title, hasDiscount = false, subtitle, image }) => {
//   return (
//     <div className="bg-gray-100 rounded-lg overflow-hidden relative flex flex-col md:flex-row items-center p-4">
//       {hasDiscount && (
//         <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//           SAVE 15% OFF
//         </div>
//       )}
//       <div className="w-full md:w-1/2 mb-4 md:mb-0">
//         <h3 className="font-semibold text-lg mb-2">{title}</h3>
//         {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
//         <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Buy Now</button>
//       </div>
//       {image && (
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img src={image} alt={title} className="max-w-full h-auto" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeatureItem;
