import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
// import dashboardRoutes from "./dashboardRoutes";
import { muiRoutes } from "./muiRoutes";
import DragAndDrop from "app/pages/dnd/DragAndDrop";
import MyShops from "app/pages/Shops/myshops";
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