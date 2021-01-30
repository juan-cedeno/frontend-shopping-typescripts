import {Switch, Route, Redirect, } from "react-router-dom";
import { Header } from "../components/Header";
import { CartPage } from "../pages/CartPage";
import { FormProductPage } from "../pages/FormProductPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const DashboardRouter = () => {
  return (

      <div>
        <Header/>
        <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route exact path = '/cart' component = {CartPage}/>
            <PublicRouter exact path = '/login' component = {LoginPage}/>
            <PublicRouter exact path = '/register' component = {RegisterPage}/>
            <PrivateRouter exact path = '/add-product' component = {FormProductPage}/>
            <PrivateRouter exact path = '/edit-product/:id' component = {FormProductPage}/>
            <Route exact path = '/product-detail/:id' component = {ProductDetailPage}/>
            <Redirect to = '/'/>
        </Switch>
      </div>

  );
};
