import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { formatter } from 'helper';
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text,record) => <Link to={'/antd'}>{record.name}</Link>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '5%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text, r) => <span>{formatter.format(text)}</span>,
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    render: (text) => <span>{text || 0} %</span>,
  },
  {
    title: 'Giá bán',
    dataIndex: 'discountedPrice',
    key: 'discountedPrice',
    render: (text, r) => <span>{formatter.format(text)}</span>,
  },
  {
    title: 'Tồn kho',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Danh mục',
    dataIndex: 'stock',
    key: 'stock',
    render: (text, r) => <span>{r.category.name}</span>,
  },
  {
    title: 'Nhà cung cấp',
    dataIndex: 'supplier',
    key: 'supplier',
    render: (text, r) => <span>{r.supplier.name}</span>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const ProductPage = () => {
  const[products,setProducts]=useState([])
  const getProductsData = async ()=>{
    try {
      const url="https://batch-293-0-nodejs.onrender.com/user/products"
    const res=axios.get(url)
    setProducts((await res).data.payload)
    } catch (error) {
      console.error('««««« err »»»»»', error);
    }
    
  }
  useEffect(()=>{
    getProductsData()
    
  },[])
  console.log(products)
  return <Table rowKey="_id" columns={columns} dataSource={products} />;
  
};
export default ProductPage;
