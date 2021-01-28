import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"



export const PublicRouter = (props : RouteProps) => {

     const {user} = useContext(StoreContext)

     return (
          user?.id ? (
               <Redirect to = '/'/>
               
          ) : <Route {...props}/>
               
          
     )
}
