import React, { useEffect, useState } from 'react';
import ProductCard from '../home/ProductCard';
import SortDropdown from '../../util/SortDropdownProps';
import ViewToggle from '../../util/ViewToggle';
import * as service from '../../service/apiService';

type ProductCardItem = {
    id: number;
    title: string;
    image: string;
    images: string[];
    price: string;
    countdown: string;
};

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<ProductCardItem[]>([]);
    const [sortOption, setSortOption] = useState<
        'default' | 'latest' | 'priceLowToHigh' | 'priceHighToLow'
    >('default');

    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const size = 12;

    const fetchProducts = async (pageNumber: number) => {
        try {
            const res = await service.getPaginated(pageNumber, size, sortOption);

            if (!res || !res.content) {
                throw new Error('API không trả về dữ liệu hợp lệ');
            }

            const mapped: ProductCardItem[] = res.content.map((item: any) => ({
                id: item.id,
                title: item.name,
                image: item.images?.[0] || '/placeholder.jpg',
                images: item.images || [],
                price: item.price.toLocaleString('vi-VN') + 'đ',
                countdown: new Date(item.expiryDate).toLocaleDateString('vi-VN'),
            }));

            setProducts(prev => [...prev, ...mapped]);
            setHasMore(!res.last);
        } catch (error) {
            console.error('Lỗi khi gọi API:', error);
        }
    };
    useEffect(() => {
        setProducts([]);
        setPage(0);
        fetchProducts(0); 
      }, [sortOption]);

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const handleLoadMore = () => {
        if (hasMore) setPage(prev => prev + 1);
    };

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">Product list</h2>
                    </div>
                    <div className="flex justify-end text-center items-center gap-2 ml-auto">
                        <SortDropdown value={sortOption} onChange={setSortOption} />
                        <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
                    </div>
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
                        : "flex flex-col gap-4"}>
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} viewMode={viewMode} />
                        ))}
                    </div>

                </div>
            </section>

            {hasMore && (
                <div style={{ textAlign: "center" }}>
                    <button
                        onClick={handleLoadMore}
                        style={{
                            backgroundColor: "whiteSmoke",
                            fontSize: "20px",
                            border: "1px solid",
                            width: "95%",
                            margin: "20px 0px"
                        }}
                    >
                        Load more
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductsPage;
