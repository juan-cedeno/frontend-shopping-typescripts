import { createContext } from "react";
import { Products } from "../interfaces/products";
import { User } from "../interfaces/user";

interface IContext {
     user : User | undefined ,
     loginUser: (user : User) =>  void,
     logOut: () => void,
     addProductcart : (product : Products) => void,
     productCart : Products[], 
     addQty: (product : Products) => void,
     deleteItemsCart : (product : Products) => void,
     clear : () => void,
}

export const StoreContext = createContext <IContext>({} as IContext)