import { useCallback, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import i18njs from "../i18nj";
import { Products } from "../interfaces/products";

interface IProps {
  product: Products;
}

export const BtnAddToCart = (props: IProps ) => {
  const { product } = props;

  const { addProductcart} = useContext(StoreContext);

  const handlenAddCart = useCallback(() => {
    addProductcart(product);
    
  }, [addProductcart, product]);

  return (
    <div className="cart-detail-product">
      <button className = 'bottom-detail' onClick={handlenAddCart}>{i18njs.t("addToCart")}</button>
    </div>
  );
};
