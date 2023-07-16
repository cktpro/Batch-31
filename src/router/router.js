import React from 'react';
import { LOCATIONS } from 'constants/index';

// import ParentComponent from 'components/example/useCallback';
import Layout from 'Component/Layout';
import AntdLayout from 'Component/antdLayout';

import FormPage from 'pages/Form';
import PlayList from 'pages/playList';
import NotFoundPage from 'pages/404';
import CounterApp from 'pages/counterApp';
import TodoApp from 'pages/todoApp';
import Profile from 'pages/profile';
import AntdHomePage from 'pages/antd/homePage';
import ProductsPage from 'pages/productsPage';
import ProductsDetail from 'pages/productsPage/detail';
import LoginPage from 'pages/loginPage';
import Logout from 'Component/Logout';

export const routers = [
  {
    path: LOCATIONS.HOME_PAGE,
    name: "Layout",
    element: <Layout />,
    children: [
      { isRoot: true, name: "Parent Component", element: <TodoApp /> },
      { path: LOCATIONS.PLAY_LIST, name: "Play List", element: <PlayList /> },
      
      // { path: LOCATIONS.TAB, name: "Tab", element: <TabPage /> },
      // { path: LOCATIONS.SLIDE, name: "Slider", element: <SliderPage /> },
      { path: LOCATIONS.PRODUCTS, name: "Product Page", element: <ProductsPage /> },
      { path: LOCATIONS.MY_PROFILE, name: "My Profile", element: <Profile /> },
      { path: LOCATIONS.COUNTER, name: "Counter", element: <CounterApp /> },
      { path: LOCATIONS.TODO, name: "Todo", element: <TodoApp /> },
      { path: LOCATIONS.PRODUCTS_PAGE, name: "Products", element: <ProductsPage /> },
      { path: LOCATIONS.PRODUCTS_DETAIL_PAGE, name: "Products Detail", element: <ProductsDetail /> },
    ]
  },
  {
    path: LOCATIONS.ANT_DESIGN,
    name: "Antd",
    element: <AntdLayout />,
    children: [
      { path: LOCATIONS.ANT_DESIGN_HOME_PAGE, name: "Home", element: <AntdHomePage /> },
      // { isRoot: true, name: "Home", element: <AntdHomePage /> },
    ]
  },
  // { path: LOCATIONS.TEMPLATE, name: "Template", element: <Template /> },
  { path: LOCATIONS.FORM, name: "Form Register", element: <FormPage /> },
  { path: LOCATIONS.LOGIN, name: "Login", element: <LoginPage /> },
  { path: LOCATIONS.LOGOUT, name: "Login", element: <Logout /> },
  { path: "*", element: <NotFoundPage /> },
];
export const unAuthRouter = [
  { path: LOCATIONS.LOGIN, name: "Login Page", element: <LoginPage /> },
];