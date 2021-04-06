import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import pageReducer from "./page.reducer";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    page: pageReducer,
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
});

export default rootReducer;
