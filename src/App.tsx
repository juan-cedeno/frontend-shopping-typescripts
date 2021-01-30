import "./App.css";
import "react-notifications-component/dist/theme.css";
import { AppRouter } from "./routers/AppRouter";
import ReactNotification from "react-notifications-component";
import { StoreContext } from "./context/StoreContext";
import { useCallback, useState, useEffect } from "react";
import { User } from "./interfaces/user";
import { Spinner } from "./components/Spinner";
import { Products } from "./interfaces/products";
import './i18n'

function App() {
  const [user, setUser] = useState<User | undefined>();
  const [checking, setChecking] = useState(true);
  const [productCart, setProductCart] = useState<Products[]>([]);

  const loginUser = useCallback((user: User) => {
    localStorage.setItem("USER", JSON.stringify(user));
    setUser(user);
  }, []);

  const getLoginUser = useCallback(() => {
    const userInfo = localStorage.getItem("USER") || "";

    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUser(user);
    }
    setChecking(false);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");
    setChecking(false);
    setUser(undefined);
  }, []);

  useEffect(() => {
    getLoginUser();
  }, [getLoginUser]);

  const addProductcart = useCallback((product: Products) => {
    setProductCart((items) => {
      const exict = items.find((e) => e._id === product._id);

      if (!exict) {
        items.unshift({ ...product, qty: 1 });
        localStorage.setItem("CART", JSON.stringify(items));
      }
      return items;
    });
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("CART") || "[]");
    setProductCart(items);
  }, []);

  const addQty = useCallback(
    (product: Products) => {
      const copy = [...productCart];

      const found = copy.find((q) => q._id === product._id);

      if (found) {
        found.qty = (found.qty || 1) + 1;
        setProductCart(copy);
      }
    },
    [productCart]
  );

  const deleteItemsCart = useCallback((product: Products) => {
      let copy = [...productCart];
      
      const found = copy.find((i) => i._id === product._id);

      if (found) {
        if (found.qty! > 1) {
          found.qty! -= 1;
        } else {
          copy = copy.filter((i) => i._id !== product._id);
        }
      }
      setProductCart(copy);
    },
    [productCart]
  );

  const clear = useCallback(() => {
    setProductCart([])
    localStorage.removeItem('CART')
  },[])
  if (checking) {
    return <Spinner />;
  }

  return (
    <div>
      <ReactNotification />

      <StoreContext.Provider
        value={{
          user,
          loginUser,
          logOut,
          addProductcart,
          productCart,
          addQty,
          deleteItemsCart,
          clear
        }}
      >
        <AppRouter />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
