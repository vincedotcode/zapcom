import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
// import dashboardRoutes from "./dashboardRoutes";
import { muiRoutes } from "./muiRoutes";
import DragAndDrop from "app/pages/dnd/DragAndDrop";
import MyShops from "app/pages/Shops/myshops";
import Products from "app/pages/Products/products";
import ShopDetails from "app/pages/Shops/ShopDetails";
import Login from "app/pages/Authentication/Login/Login";
/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/",
        element: <Page component={Home} />
    },
    ...muiRoutes,
    {
        path: "/user-mgt/users",
        element: <Page component={DragAndDrop} />
    },
    {
        path: "/inventory/my-shops",
        element: <Page component={MyShops} />
    },
    {
        path: "/inventory/products",
        element: <Page component={Products} />
    },
    {
        path: "inventory/my-shops/:shopId", 
        element:<Page component={ShopDetails}/>
    },
    {
        path: "/login", 
        element:<Page component={Login} layout={"solo-page"}/>
    },

    // ...dashboardRoutes,
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};