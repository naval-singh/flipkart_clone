import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductPage from "./containers/ProductPage";

/**
 * @author
 * @function Router
 **/

const Router = (props) => {
    return (
        <>
            <Route path={"/"} exact component={HomePage} />
            <Route path={"/:slug"} component={ProductPage} />
        </>
    );
};

export default Router;
