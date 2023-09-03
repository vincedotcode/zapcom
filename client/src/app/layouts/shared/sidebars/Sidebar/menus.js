import React from "react";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
const menus = [
  // Dashboard
  {
    label: "sidebar.menu.home",
    type: "section",
    children: [
      {
        uri: "/",
        label: "sidebar.menuItem.dashboard",
        type: "nav-item",
        icon: <SpaceDashboardOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // inventory
  {
    label: "sidebar.menu.inventory",
    type: "section",
    children: [
      {
        uri: "/inventory/my-shops",
        label: "sidebar.menuItem.myShops",
        type: "nav-item",
        icon: <StorefrontOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/inventory/inventory",
        label: "sidebar.menuItem.inventory",
        type: "nav-item",
        icon: <Inventory2OutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/inventory/category",
        label: "sidebar.menuItem.category",
        type: "nav-item",
        icon: <CategoryOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/inventory/products",
        label: "sidebar.menuItem.products",
        type: "nav-item",
        icon: <LocalMallOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // sales & orders
  {
    label: "sidebar.menu.salesOrders",
    type: "section",
    children: [
      {
        uri: "/sales-and-orders/sales",
        label: "sidebar.menuItem.sales",
        type: "nav-item",
        icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/sales-and-orders/orders",
        label: "sidebar.menuItem.orders",
        type: "nav-item",
        icon: <ShoppingBasketOutlinedIcon sx={{ fontSize: 20 }} />,
      },
      {
        uri: "/sales-and-orders/create-orders",
        label: "sidebar.menuItem.createOrders",
        type: "nav-item",
        icon: <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // customers
  {
    label: "sidebar.menu.contacts",
    type: "section",
    children: [
      {
        uri: "/contact/customers",
        label: "sidebar.menuItem.customers",
        type: "nav-item",
        icon: <PeopleAltOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // ai assistance
  {
    label: "sidebar.menu.aiAssistance",
    type: "section",
    children: [
      {
        uri: "/ai-assistance/my-ai",
        label: "sidebar.menuItem.myAI",
        type: "nav-item",
        icon: <QuestionAnswerOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
  // user management
  {
    label: "sidebar.menu.userManagement",
    type: "section",
    children: [
      {
        uri: "/user-mgt/users",
        label: "sidebar.menuItem.users",
        type: "nav-item",
        icon: <GroupsOutlinedIcon sx={{ fontSize: 20 }} />,
      },
    ],
  },
];

export default menus;
