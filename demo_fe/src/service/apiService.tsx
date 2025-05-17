import axios from 'axios';

export const getPaginated = async (page: number, size: number, sort: string = 'default') => {
  const url = new URL('http://localhost:8080/api/medicines/paginated');
  url.searchParams.append('page', page.toString());
  url.searchParams.append('size', size.toString());
  if (sort && sort !== 'default') {
    url.searchParams.append('sort', sort);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
};

export const detailProduct = async (id: number) => {
  const res = await fetch(`http://localhost:8080/api/medicines/${id}`);
  if (!res.ok) {
    throw new Error(`Không thể lấy dữ liệu sản phẩm id=${id}`);
  }
  return await res.json();
};



export const addToCart = async (item: any, quantity: number) => {
  try {
    const payload = {
      ...item,
      quantity,
    };
    const response = await axios.post("http://localhost:8080/order-items", payload);
    return response.data;
  } catch (error: any) {
    return error;
  }
};

export const searchProducts = async (term: string, category: string) => {
  const res = await axios.get('/api/products/search', {
    params: {
      q: term,
      category: category !== 'All Categories' ? category : ''
    }
  });
  return res.data;
};


const API_BASE = "http://localhost:8080/api/blogs";

export const getAllBlogs = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const getBlogById = async (id: number) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};


export const getBestSellingProducts = async () => {
  const res = await axios.get("http://localhost:8080/api/products/best-selling");
  return res.data;
};