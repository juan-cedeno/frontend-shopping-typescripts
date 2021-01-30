import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Title } from "../components/Title";
import i18njs from "i18n-js";
import { Products } from "../interfaces/products";
import productService from "../services/products";
import '../css/detail.css'
import { BtnAddToCart } from "../components/BtnAddToCart";
import SkeletorDetail from "../utils/skeletor-detail";
import { useTranslation } from "react-i18next/";

interface IParams {
  id: string;
}

export const ProductDetailPage = () => {
  const [product, setProduct] = useState({} as Products);
  const [loading, setLoading] = useState<boolean>(false)

  const params = useParams<IParams>();
  const history = useHistory()
  const {t} = useTranslation()

  const { id } = params;

  useEffect(() => {
    const getProductById = async () => {
      setLoading(true)
      const data = await productService.getProductById(id);
      
      setProduct(data!);
      setLoading(false)
    };

    getProductById();
  }, [id]);

  const handlenBack = useCallback(() => {
     history.goBack()
  },[history])

  if (loading) {
    return <SkeletorDetail/>
  }

  return (
    <div className = 'cont-detail'>
      <div>
        <Title title={t("productDetail")} subTitle="" />
      </div>

      <div className = 'detail'>

        <div className = 'img'>
          <img src={product.image} alt={product.name} />
        </div>

        <div>
         <div className = 'name-detail'>
          <h3>{product.name}</h3>
          <h2>{i18njs.toCurrency(product.price)}</h2>
          <p>{product.description && product.description}</p>
          </div>    

        <div className = 'btn-detail'>
          <BtnAddToCart product = {product}/>
          <button onClick = {handlenBack} className = 'back btn'>{t("goBack")}</button>
        </div>
        <div className = 'available'>
          <p>
            <i className="fas fa-check"></i>
            {t("itemAvailable")}
          </p>
          <p>
            <i className="fas fa-truck"></i> {t("delivery")}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};
