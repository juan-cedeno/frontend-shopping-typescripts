import { Link } from "react-router-dom";
import home from "../assets/home.png";
import userImg from "../assets/user.png";
import cart from '../assets/cart.png'
import arrow from "../assets/arrow.png";
import "../css/header.css";
import { useCallback, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const Header = () => {
  const { user, logOut } = useContext(StoreContext);

  const handlenLogOut = useCallback(() => {
    logOut();
  }, [logOut]);  

  return (
    <header className="header">
      <div>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
      </div>

      <div>
        <Link to="/">
          <img className="img-header" src={home} alt="home" />
        </Link>
        <Link to="/cart">
          <img className="img-header" src={cart} alt="cart" />
        </Link>
      </div>

      <div>
        {user?.id ? (
          <button className="logout" onClick={handlenLogOut}>
            <img className="img-header" src={arrow} alt="arror" />
          </button>
        ) : (
          <Link to="/login">
            <img className="img-header" src={userImg} alt="login" />
          </Link>
        )}
      </div>
    </header>
  );
};
