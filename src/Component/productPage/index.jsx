import { Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text,record) => <Link to={'/antd'}>{text}{record.name}</Link>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
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
    const url="https://batch-293-0-nodejs.onrender.com/user/products"
    axios
    .get(url)
    .then((result) => {
        console.log(result)
      setProducts(result.data.payload)

    })
    .catch((err) => {
      console.error(err);
    });
  }
  useEffect(()=>{
    getProductsData()
    setProducts(getProductsData())
  },[])
  return <Table columns={columns} dataSource={data} />;
};
export default ProductPage;
