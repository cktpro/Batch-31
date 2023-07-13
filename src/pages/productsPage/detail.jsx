import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {  Card } from 'antd';

function ProductDetail(props) {
  const params = useParams();
  const [category, setCategory] = useState({});
  const [supplier, setSupplier] = useState({});
  const [product, setProduct] = useState({});
  const getProductData = async () => {
    try {
      const url = `https://batch-293-0-nodejs.onrender.com/user/products/${params.id}`;

      const res = await axios.get(url);

      setProduct(res.data.payload);
      setCategory(res.data.payload.category)
      setSupplier(res.data.payload.supplier)
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <p className="fw-bold">{product.name}</p>
        <p className="fst-italic">{product.description}</p>
        <p className="fst-italic">{product.discount}</p>
        <p className="fst-italic">{product.discountedPrice}</p>
        <p className="fst-italic">{product.price}</p>
        <p className="fst-italic">{product.stock}</p>
        {/* <p className="fst-italic">{product.category.name}</p> */}
        <p className="fst-italic">{category.name}</p>
        <p className="fst-italic">{supplier.name}</p>
      </Card>
    </div>
  );
}

export default ProductDetail;