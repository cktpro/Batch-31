import React from 'react';
import { Breadcrumb} from 'antd';
import { useLocation } from 'react-router-dom'


function BreadCrumb(props) {
  const location = useLocation();
  const title= location.pathname.split("/").toString()
  const upcase =title.charAt(1).toUpperCase()+title.slice(2)
  const items=[
    {
      title: "Home",
    },
    {
      title: upcase
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