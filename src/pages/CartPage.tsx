import {  useContext } from "react"
import { CartItemsList } from "../components/CartItemsList"
import { Title } from "../components/Title"
import { StoreContext } from "../context/StoreContext"
import '../css/cart.css'
import { CartTotal } from "../components/CartTotal"
import { NoItemPage } from "./NoItemPage"
import { useTranslation } from "react-i18next"

export const CartPage = () => {

     const {productCart} = useContext(StoreContext)
     const {t} = useTranslation()

     return (
          <>
          <Title title = {t('cart')} subTitle = {t('itemsYourCart')}/>

              <div className = 'cont-cart'>
                   {
                        productCart.length 

                        ?<>

                         <div>
                              {
                                   productCart.map(items => (
                                        <CartItemsList items = {items} key = {items._id}/>
                                   ))
                              }
                         </div>

                         <div>
                              <CartTotal/>
                         </div>

                        </>: <NoItemPage/>
                   } 
              </div>
          </>
     )
}
