import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./detail.css";
import { formatter } from "helper";

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
      setCategory(res.data.payload.category);
      setSupplier(res.data.payload.supplier);
    } catch (err) {
      console.error("««««« err »»»»»", err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="product-box mx-auto">
      <div className="product-image">
        <img
          alt="example"
          src="https://picsum.photos/300"
        />
      </div>
      <div>
        <h4>{product.name}</h4>
        <div className="d-flex justify-content-center align-items-center my-3">
          <p className="old-price me-2">{formatter.format(product.price)}</p>
          <p className="new-price me-2">
            {formatter.format(product.discountedPrice)}
          </p>
          <p className="discount">{product.discount}%</p>
        </div>
        <table className="table">
          <tr>
            <th colSpan={2}>Thông tin chi tiết</th>
          </tr>
          <tr>
            <td className="left">Mô tả</td>
            <td className="right
            ">{product.description}</td>
          </tr>
          <tr>
            <td className="left">Số lượng còn lại</td>
            <td className="right">{product.stock}</td>
          </tr>
          <tr>
            <td className="left">Loại sản phẩm</td>
            <td className="right">{category.name}</td>
          </tr>
          <tr>
            <td className="left">Nhà cung cấp</td>
            <td className="right">{supplier.name}</td>
          </tr>
        </table>
      </div>
    </div>
    // <div className="d-flex justify-content-center mt-5">
    //   <Card
    //     style={{
    //       width: 300,
    //     }}
    //     cover={
    //       <img
    //         alt="example"
    //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //       />
    //     }
    //     actions={[
    //       <SettingOutlined key="setting" />,
    //       <EditOutlined key="edit" />,
    //       <EllipsisOutlined key="ellipsis" />,
    //     ]}
    //   >
    //
    //     <p className="fst-italic">{product.description}</p>
    //     <p className="fst-italic">{product.discount}</p>
    //     <p className="fst-italic">{product.discountedPrice}</p>
    //     <p className="fst-italic">{product.price}</p>
    //     <p className="fst-italic">{product.stock}</p>
    //     {/* <p className="fst-italic">{product.category.name}</p> */}
    //     <p className="fst-italic">{category.name}</p>
    //     <p className="fst-italic">{supplier.name}</p>
    //   </Card>
    // </div>
  );
}

export default ProductDetail;
