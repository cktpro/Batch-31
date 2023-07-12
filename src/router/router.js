import React from 'react';
import { Redirect } from 'react-router-dom';
// import { LOCATIONS } from 'constants/index';
// import ParentComponent from 'components/example/useCallback';
import Layout from 'Component/Layout';
import Form from 'pages/Form';
import PlayList from 'pages/playList';
import CounterApp from 'pages/counterApp';
import Main from 'pages/Main'
// import ProductsPage from 'pages/products';
// import SliderPage from 'pages/slider';
// import TabPage from 'pages/tabs';
// import Template from 'pages/template';
import NotFoundPage from 'pages/404';
import TodoApp from 'pages/todoApp';
import MyProfile from 'pages/profile';
import Antd from 'pages/antd';
// import CounterApp from 'pages/counterApp';

const LOCATIONS = {
  HOME_PAGE: '/',
  PLAY_LIST: 'play-list',
  FORM: 'form',
  TAB: 'tabs',
  SLIDE: 'slider',
  PRODUCTS: 'products',
  TEMPLATE: 'template',
  COUNTER: 'counter',
  TODO:'todo',
  PROFILE:'profile',
  ANTD:'antd'
}

const routers = [
  {
    path: LOCATIONS.HOME_PAGE,
    element: <Layout />,
    children: [
      { isRoot: true, element: <Main /> },
      { path: LOCATIONS.PLAY_LIST, element: <PlayList /> },
    //   { path: LOCATIONS.FORM, element: <Form /> },
      { path: LOCATIONS.COUNTER, element: <CounterApp /> },
      { path: LOCATIONS.PROFILE, element: <MyProfile /> }
    //   { path: LOCATIONS.SLIDE, element: <SliderPage /> },
    //   { path: LOCATIONS.PRODUCTS, element: <ProductsPage /> 
    // },
    ]
  },
  { path: LOCATIONS.FORM, element: <Form /> },
  { path: LOCATIONS.TODO, element: <TodoApp /> },
  { path: LOCATIONS.ANTD, element: <Antd /> },
//   { path: LOCATIONS.COUNTER, element: <CounterApp /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routers;
