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



export const  getAll=async () =>{
  try{
      const  res = await axios.get(`http://localhost:8080/api/medicines`);
      return res.data;
  }catch (e) {
      console.log(e)
  }
}
export const  getAllType=async () =>{
  try{
      const  res = await axios.get(`http://localhost:8080/api/categories`);
      return res.data;
  }catch (e) {
      console.log(e)
  }
}

