import React from "react";
import { Route, Switch } from "react-router-dom";
import CartPage from "./containers/CartPage";
import HomePage from "./containers/HomePage";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import ProductPage from "./containers/ProductPage";

/**
 * @author
 * @function Router
 **/

const Router = (props) => {
    return (
        <Switch>
            <Route path={"/"} exact component={HomePage} />
            <Route path={"/cart"} exact component={CartPage} />
            <Route path={"/:slug"} exact component={ProductPage} />
            <Route path={"/:productSlug/:productId/p"} exact component={ProductDetailsPage} />
        </Switch>
    );
};

export default Router;
