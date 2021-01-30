import { useCallback, useContext, useEffect, useState } from "react";
import { Products } from "../interfaces/products";
import productService from "../services/products";
import { ProductsList } from "./ProductsList";
import { Title } from "./Title";
import "../css/products.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import SkeletorProduct from "../utils/skeletor-product";
import { useTranslation } from "react-i18next";

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

  const {t} = useTranslation()
  return (

    <>
      <div>
        <Title title={t('store')} subTitle={t('WelcomeToTheStore')} />
      </div>

      <div className="add-product">
        {user && (
          <Link className="btn" to="/add-product">
           {t('addProduct')}
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
