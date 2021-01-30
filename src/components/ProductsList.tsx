import { Link} from "react-router-dom"
import { Products } from "../interfaces/products"
import i18nJs from 'i18n-js'
import i18nj from '../i18nj'
import { ProductAction } from "./ProductAction"
import {  useContext } from "react"
import { StoreContext } from "../context/StoreContext" 
import { BtnAddToCart } from "./BtnAddToCart"

interface IProps {
    products : Products,
    deletedProduct: (id : string) => void
}


export const ProductsList = ({products , deletedProduct}:IProps) => {

    const {user} = useContext(StoreContext)


    return (
        <div className = 'product'>

            <div className = 'img-product'>
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

                <Link to = {`/product-detail/${products._id}`}>{i18nj.t('detail')}</Link>
                
                 <BtnAddToCart product = {products}/>   
            </div>
            
        </div>
    )
}
