import MainLayout from "./Layouts/Main/MainLayout";
import Home from "./Views/Home/Home";
import AboutUs from "./Views/AboutUs/AboutUs";
import { Redirect } from "react-router";


const AppRoutes = [
    { Layout: MainLayout, path: "/", Component: Home, exact: true },
    { Layout: MainLayout, path: "/about-us", Component: AboutUs, exact: true },

    { Layout: Redirect, to: "/", exact: false }
];

export default AppRoutes;