import MainLayout from "./Layouts/Main/MainLayout";

import Home from "./Views/Home/Home";
import AboutUs from "./Views/AboutUs/AboutUs";


const AppRoutes = [
    {Layout: MainLayout, path: "/", Component: Home, exact:true},
    {Layout: MainLayout, path: "/about-us", Component: AboutUs, exact:true},
];

export default AppRoutes;