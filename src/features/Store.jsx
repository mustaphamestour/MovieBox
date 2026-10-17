import { createStore } from "redux";
import MovieReducer from "./MovieReducer.jsx";

const Store = createStore(MovieReducer);

export default Store;
