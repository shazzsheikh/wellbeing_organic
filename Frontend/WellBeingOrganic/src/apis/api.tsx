import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com/";

export const products = async() => {
    try {
        const res = await axios.get(`${API_BASE_URL}products`);
        return(res.data)
        console.log(res.data);
    } catch(error){
        console.log(error);
    }
}