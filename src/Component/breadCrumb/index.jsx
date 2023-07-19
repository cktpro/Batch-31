import React from 'react';
import { Breadcrumb} from 'antd';
import { useLocation } from 'react-router-dom'


function BreadCrumb(props) {
  const location = useLocation();
  const title= location.pathname.split("/")
  const items=[
    {
      title: "Home",
    },
    {
      title: title,
    }
  ]
    return (
      <Breadcrumb
      style={{
        margin: "16px 0",
      }}
      items={items}
    />
    );
}

export default BreadCrumb;