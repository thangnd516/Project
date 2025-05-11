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
