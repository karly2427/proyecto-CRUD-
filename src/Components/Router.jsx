import { Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import Footer from "../Views/Partials/Footer";
import Navbar from "../Views/Partials/Navbar";
import AboutUs from "../Views/AboutUs";
import Contact from "../Views/Contact";
import Catalog from "../Views/Catalog";
import RegisterProduct from "../Views/RegisterProduct";

const Router=()=>{
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/nosotros" element={<AboutUs/>} />
                <Route path="/contactanos" element={<Contact/>} />
                <Route path="/catalogo" element={<Catalog/>}/>
                <Route path="/Registro-Producto" element={<RegisterProduct/>} />
            </Routes>
            <Footer/>
        </div>
        

    );

}
export default Router;