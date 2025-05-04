import axios from 'axios';

export const  getAll =async () =>{
  try{
      const  res = await axios.get(`http://localhost:8080/api/medicines`);
      return res.data;
  }catch (e) {
      console.log(e)
  }
}
