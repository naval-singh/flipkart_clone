import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, updateCart } from "./actions";
import Router from "./Router";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(updateCart());
    }, []);

    useEffect(() => {
        !auth.authenticate && dispatch(isUserLoggedIn());
    }, [auth.authenticate]);

    return <Router />;
}

export default App;
