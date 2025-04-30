import axios from 'axios';

export const postLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post('', {
      email,
      password,
      delay: 5000
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else {
      throw new Error('Network error');
    }
  }
};


interface Product {
  id: number;
  nameProduct: string;
  price: number;
  images?: string;
  color?: string;
  typeProduct?: string;
}

// apiService.ts
export const getAll = async (
  page: number,
  sortBy: string,
  price: string,
  color: string,
  typeProduct: string,
  nameProduct: string
): Promise<{ content: Product[] }> => {
  // Thay thế đường dẫn URL cho phù hợp
  const res = await fetch(`/api/products?page=${page}&sortBy=${sortBy}&price=${price}&color=${color}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`);
  return res.json();
};
