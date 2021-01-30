import { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { StoreContext } from "../context/StoreContext";
import { Products } from "../interfaces/products";

interface IProps {
  product: Products;
}

export const BtnAddToCart = (props: IProps ) => {
  const { product } = props;
  const {t} = useTranslation()

  const { addProductcart} = useContext(StoreContext);

  const handlenAddCart = useCallback(() => {
    addProductcart(product);
    
  }, [addProductcart, product ]);

  return (
    <div className="cart-detail-product">
      <button className = 'bottom-detail detail-btn' onClick={handlenAddCart}>{t("addToCart")}</button>
    </div>
  );
};
