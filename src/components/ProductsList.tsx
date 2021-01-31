import { Link} from "react-router-dom"
import { Products } from "../interfaces/products"
import i18nJs from 'i18n-js'
import { ProductAction } from "./ProductAction"
import {  useContext } from "react"
import { StoreContext } from "../context/StoreContext" 
import { BtnAddToCart } from "./BtnAddToCart"
import { useTranslation } from "react-i18next"


interface IProps {
    products : Products,
    deletedProduct: (id : string) => void
}


export const ProductsList = ({products , deletedProduct}:IProps) => {

    const {user} = useContext(StoreContext)
    const {t} = useTranslation()

    return (

        <div className = 'product animate__animated animate__fadeIn'>

            <div className = 'img-product  '>
                <img src = {products.image} alt = {products.name}/>
            </div>

            <div className = 'price-name-product'>
                <p>{products.name}</p>
                <h3>{i18nJs.toCurrency(products.price)}</h3>
            </div>

            <div className = 'cart-detail-product'>

                {
                    user && <ProductAction id = {products._id!} deletedProduct = {() => deletedProduct(products._id!)}/>
                }

                <Link to = {`/product-detail/${products._id}`}>{t('detail')}</Link>
                
                 <BtnAddToCart product = {products}/>   
            </div>
            
        </div>

    )
}
