import i18njs from "i18n-js"
import '../css/cart-total.css'
import { useCallback, useContext, useState } from "react"
import { StoreContext } from "../context/StoreContext"
import { useTranslation } from "react-i18next"


export const CartTotal = () => {

     const [fixed, setFixed] = useState<boolean>(false)
     const {t} = useTranslation()
     const {productCart, clear} = useContext(StoreContext)

     let totalItem: number = 0
     let totalPayment: number = 0

     productCart.forEach((items) => {
          totalItem += (items.qty || 1)
          totalPayment += items.price * (items.qty || 1)
     })

     const scroll = useCallback(() => {
          if (window.scrollY >= 90) {
               setFixed(true)
          }else {
               setFixed(false)
          }

     },[])

     window.addEventListener('scroll' , scroll)

     const handlenClear = useCallback(() => {
          clear()
     },[clear])

     return (
          <>
               <div className= {fixed ? 'active cont-total' : 'cont-total' } >
                    <div className = 'total'>
                         <p>{t('total')}</p>
                         <label>{totalItem}</label>
                    </div>
                    <div className = 'payment'>
                         <p>{t('totalPayment')}</p>
                         <label>{i18njs.toCurrency(totalPayment)}</label>
                    </div>
                    <div className = 'btn-total'>
                         {/* <button className = 'check btn'>{t('checkout')}</button> */}

                         <div className = 'cont-clear'>
                              <button onClick = {handlenClear}>{t('clear')}</button>
                         </div>
                    </div>
               </div>
          </>
     )
}
