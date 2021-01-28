import { useCallback, useContext, useEffect, useState } from "react";
import { Products } from "../interfaces/products";
import productService from "../services/products";
import { ProductsList } from "./ProductsList";
import { Title } from "./Title";
import i18n from "../i18nj";
import "../css/products.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import SkeletorProduct from "../utils/skeletor-product";

export const Product = () => {
  const [items, setItems] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(StoreContext);

  useEffect(() => {
    const getAllProduct = async () => {
      setLoading(true);
      const data = await productService.getProduct();
      setItems(data);
      setLoading(false);
    };

    getAllProduct();
  }, []);


  const deletedProduct = useCallback(async(id : string) => {
      await productService.deletedProduct(id )
      const productsDelete =  items.filter(p => p._id !== id)
      setItems(productsDelete)
  },[items])

  return (
    <>
      <div>
        <Title title={i18n.t("store")} subTitle={i18n.t("WelcomeToTheStore")} />
      </div>

      <div className="add-product">
        {user && (
          <Link className="btn" to="/add-product">
            Add product
          </Link>
        )}
      </div>

        {loading ? (
          <SkeletorProduct />
        ) : (

        <div className="cont-product">
          {items.map((products) => (
            <ProductsList products={products} key={products._id} deletedProduct = {deletedProduct} />
          ))}
        </div>

      )}
    </>
  );
};
