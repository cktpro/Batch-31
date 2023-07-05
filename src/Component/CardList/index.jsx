import React, { useEffect, useState } from "react";
import Card from "Component/Card";

import "./cardList.css";
import productList from "Component/fakeData/products.json";
function CardList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(productList);
  }, []);

  return (
    <div className="card-wrapper">
      {list.map((p) => (
        <span key={p.id}>
          <Card
            discounted={p.discounted}
            image={p.image}
            shopName={p.shopName}
            newPrice={p.newPrice}
            oldPrice={p.oldPrice}
            discount={p.discount}
            productName={p.productName}
            rate={p.rate}
            stock={p.stock}
            sold={p.sold}
          />
        </span>
      ))}
    </div>
  );
}

export default CardList;
