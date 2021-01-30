import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "../css/header.css";
import { useCallback, useContext, } from "react";
import { StoreContext } from "../context/StoreContext";
import { Lenguaje } from "./Lenguaje";
import { useTranslation } from "react-i18next/";

export const Header = () => {
  const { user, logOut } = useContext(StoreContext);
  const {t} = useTranslation()

  const handlenLogOut = useCallback(() => {
    logOut();
  }, [logOut]);

  return (
    <header className="header">
      <div>
        <a
          href="https://github.com/juan-cedeno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a href="mailto:juancc0315@gmail.com">
          <i className="far fa-envelope"></i>
        </a>

      </div>

      <div>
        <Link className = 'link' to="/">{t('home')}</Link>
        <Link className = 'link' to="/cart">{t('cart')}</Link>
      </div>

      <div className = 'cont-user'>
        
        <div>
           <Lenguaje/>
        </div>
        {user?.id ? (
          <button className="logout" onClick={handlenLogOut}>
            <img className="img-header" src={arrow} alt="arror" />
          </button>
        ) : (
          <Link className = 'link' to="/login">{t('login')}</Link>
        )}

      </div>
    </header>
  );
};
