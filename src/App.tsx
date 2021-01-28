import "./App.css";
import "react-notifications-component/dist/theme.css";
import { AppRouter } from "./routers/AppRouter";
import ReactNotification from "react-notifications-component";
import { StoreContext } from "./context/StoreContext";
import { useCallback, useState, useEffect } from "react";
import { User } from "./interfaces/user";
import { Spinner } from "./components/Spinner";

function App() {
  const [user, setUser] = useState<User | undefined>();
  const [checking, setChecking] = useState(true)

  const loginUser = useCallback((user: User) => {
    localStorage.setItem("USER", JSON.stringify(user));
    setUser(user);
  }, []);
  
  const getLoginUser = useCallback(() => {
    const userInfo = localStorage.getItem("USER") || '';
    
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUser(user);
    }
    setChecking(false)
  }, []);

  // const renewToken = useCallback(async() => {
  //     const data = await userService.renewToken()
  //     if (data) {
  //       setChecking(false)
  //       let user = [{name : data.name} , {id : data.id}]
  //       localStorage.setItem('USER' , JSON.stringify(user))
  //     }
  // },[])

  const logOut = useCallback(() => {
    localStorage.clear();
    setChecking(false)
    setUser(undefined);
  }, []);

  useEffect(() => {
    getLoginUser();
  }, [getLoginUser]);


  if (checking) {
    return <Spinner/>
  }

  return (
    <div>
      <ReactNotification />

      <StoreContext.Provider
        value={{
          user,
          loginUser,
          logOut,
        }}
      >
        <AppRouter />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
