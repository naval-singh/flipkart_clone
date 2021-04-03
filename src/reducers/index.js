import { combineReducers } from "redux";
import pageReducer from "./page.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";

const rootReducer = combineReducers({
    page: pageReducer,
    product: productReducer,
    category: categoryReducer,
});

export default rootReducer;
