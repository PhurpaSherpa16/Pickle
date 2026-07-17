import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Index from "../pages/Index";
import Products from "../pages/products/Products";
import Product from "../pages/products/Product";
import Checkout from "../pages/checkout/Checkout";
import Order from "../pages/order/Order";
import About from "../pages/about/About";
import Inquiry from "../pages/inquiry/Inquiry";
import ShippingPolicies from "../pages/policies/ShippingPolicies";
import ReturnRefund from "../pages/policies/ReturnAndRefunds";
import ContactSupport from "../pages/policies/ContactSupport";
import FAQs from "../pages/policies/FAQs";
import OtherPolicies from "../pages/policies/OtherPolicies";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Index/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/inquiry/:location" element={<Inquiry/>}/>
                <Route path="/shipping-policies" element={<ShippingPolicies/>}/>
                <Route path="/return-refunds" element={<ReturnRefund/>}/>
                <Route path="/contact-support" element={<ContactSupport/>}/>
                <Route path="/faqs" element={<FAQs/>}/>
                <Route path="/policies" element={<OtherPolicies/>}/>

            </Route>
        </Routes>
    )
}