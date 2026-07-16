import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Index from "../pages/Index";
import Products from "../pages/products/Products";
import Product from "../pages/products/Product";
import Checkout from "../pages/checkout/Checkout";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Index/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}