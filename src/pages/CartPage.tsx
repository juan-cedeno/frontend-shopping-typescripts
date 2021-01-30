import {  useContext } from "react"
import { CartItemsList } from "../components/CartItemsList"
import { Title } from "../components/Title"
import { StoreContext } from "../context/StoreContext"
import i18njs from "../i18nj"
import '../css/cart.css'
import { CartTotal } from "../components/CartTotal"

export const CartPage = () => {

     const {productCart} = useContext(StoreContext)
     

     return (
          <>
          <Title title = {i18njs.t('cart')} subTitle = {i18njs.t('itemsYourCart')}/>
              <div className = 'cont-cart'>
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
              </div>
          </>
     )
}
