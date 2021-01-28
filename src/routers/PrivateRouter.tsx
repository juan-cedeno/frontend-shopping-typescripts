import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"



export const PrivateRouter = (props : RouteProps) => {

     const {user} = useContext(StoreContext)

     return (
          user?.id ? (
               <Route {...props}/>
          ) : <Redirect to = '/'/>
               
          
     )
}
