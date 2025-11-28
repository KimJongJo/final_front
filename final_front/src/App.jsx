import ProductDetail from "./user-product/ProductDetail";
import ProductList from "./user-product/ProductList";
import "./css/All.css";
import ProductOrder from "./user-product/ProductOrder";
import ProductOrderComplate from "./user-product/ProductOrderComplate";
import Product from "./user-product/Product";
import Cart from "./user-product/Cart";
import StoreInfo from "./user-product/StoreInfo";
import Experts from "./user-expert/Experts";
import Expert from "./user-expert/Expert";
import ExpertProfile from "./user-expert/ExpertProfile";
import ExpertReviewCard from "./user-expert/ExpertReviewCard";
import ExpertOrder from "./user-expert/ExpertOrder";
import MarketOrders from "./text";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            {/* <Product /> */}
            {/* <ProductList /> */}
            {/* <ProductDetail /> */}
            {/* <ProductOrder /> */}
            {/* <ProductOrderComplate /> */}
            <Cart />
            {/* <StoreInfo /> */}
            {/* <Experts /> */}
            {/* <Expert /> */}
            {/* <ExpertProfile /> */}
            {/* <ExpertReviewCard /> */}
            {/* <ExpertOrder /> */}
            {/* <BrowserRouter>
                <MarketOrders />
            </BrowserRouter> */}
        </>
    );
}

export default App;
