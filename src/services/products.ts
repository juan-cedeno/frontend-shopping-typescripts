import axios from "./verifiToken";
import { Products } from "../interfaces/products";

class productService {
  static url = process.env.REACT_APP_URL_API;

  static async getProduct() {
    try {
      const { data } = await axios.get<Products[]>(`${productService.url}/product`);
      return data;

    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async createProduct(product: Products) {
    try {
      const { data } = await axios.post<Products>(`${productService.url}/product`, product);
      return data;

    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  static async getProductById(id : string) {
    try {
      const { data } = await axios.get<Products>(`${productService.url}/product/${id} ` )

      return data;

    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  static async editProduct (id : string , product : Products) {
    try {
      const {data} = await axios.put<Products>(`${productService.url}/product/${id}` , product )
      return data

    } catch (error) {
      console.log(error);
      return undefined
    }
  }

  static async deletedProduct (id : string) {
    try {
      await axios.delete<Products>(`${productService.url}/product/${id}` )

      return true
    } catch (error) {
      console.log(error);
      return false
    }
  }
}

export default productService;
