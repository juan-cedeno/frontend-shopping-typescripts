import { useCallback, useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import i18njs from "../i18nj"
import { Products } from "../interfaces/products"


interface IProps {
     items : Products
}

export const CartItemsList = ({items} : IProps) => {

     const {addQty , deleteItemsCart} = useContext(StoreContext)

     const handlenQty = useCallback(() => {
          addQty(items)
     },[items , addQty])

     const handlenDeleted = useCallback(() => {
          deleteItemsCart(items)
     },[ items, deleteItemsCart ])

     return (
          <div className = 'cart'>
               <div>
                    <img className = 'img-cart' src={items.image} alt={items.name}/>
               </div>
               <div className = 'price-name-cart'>
                    <p>{items.name}</p>
                    <label>{i18njs.toCurrency(items.price)}</label>
               </div>
               <div>
                    <p>Qty {items.qty || 1}</p>
               </div>
               <div className = 'btn-cart'>
                    <button onClick = {handlenQty}><i className="fas fa-plus"></i></button>
                    <button 
                    onClick = {handlenDeleted}>
                         {
                         items.qty! > 1 
                         ? <i className="fas fa-minus"></i>
                         : <i className="fas delete fa-trash"></i>
                         }
                    </button>
               </div>
          </div>
     )
}
