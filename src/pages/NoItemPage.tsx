
import empty from '../assets/empty.gif'
import '../css/cart-empty.css'
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next/'

export const NoItemPage = () => {

     const history = useHistory()
     const {t} = useTranslation()

     const handlenEmpty = useCallback(() => {
          history.push('/')
     },[history])

     return (
          <div className = 'cont-empty'>
               <div>
                    <img src = {empty} alt = 'empty'/>
               </div>
               <div className = 'btn-letter-empty'>
                    <p>{t('cartEmpty')}</p>
                    <button onClick = {handlenEmpty}>{t('addCart')}</button>
               </div>
          </div>
     )
}
