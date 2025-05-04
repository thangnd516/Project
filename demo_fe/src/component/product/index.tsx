import React, { useEffect, useState } from 'react';
import * as service from "../../service/apiService";
import ProductCard from '../home/ProductCard';
import SortDropdown from '../../util/SortDropdownProps';
import ViewToggle from '../../util/ViewToggle';

type ProductCardItem = {
    title: string;
    image: string;
    images: string[];
    price: string;
    countdown: string;
};

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<ProductCardItem[]>([]);
    const fetchProducts = async () => {
        try {
            const res = await service.getAll();
            if (!res) {
                throw new Error('API không trả về mảng hợp lệ');
            }
            const mapped: ProductCardItem[] = res?.map((item: any) => ({
                title: item.name,
                image: item.images?.[0] || '/placeholder.jpg',
                images: item.images || [],
                price: item.price.toLocaleString('vi-VN') + 'đ',
                countdown: new Date(item.expiryDate).toLocaleDateString('vi-VN'),
            }));

            setProducts(mapped);
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortOption, setSortOption] = useState<'default' | 'popularity' | 'rating' | 'latest' | 'priceLowToHigh' | 'priceHighToLow'>('default');


    return (
        <>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className=" text-center mb-6">
                        <h2 className="text-2xl font-bold ">Product list</h2>
                    </div>
                    <div className="flex justify-end text-center items-center gap-2 ml-auto">
                        {/* <div className='flex items-center gap-2'> */}
                            <SortDropdown value={sortOption} onChange={setSortOption} />
                            <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
                        {/* </div> */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))}
                    </div>
                </div>
            </section>
            <div style={{ textAlign: "center" }}>

                <button
                    style={{
                        backgroundColor: "whiteSmoke",
                        fontSize: "20px",
                        border: "1px solid",
                        width: "95%",
                        margin: "20px 0px"
                    }}>Load more
                </button>
            </div>
        </>

    );
};

export default ProductsPage;
