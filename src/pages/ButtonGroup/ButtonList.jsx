import React, { useState } from "react";
import Button from "./Button";
import Plus from "Component/Icon/plus";
import Minus from "Component/Icon/minus";

function ButtonList(props) {
  const [count, setCount] = useState(10);
  return (
    <div className="d-flex justify-content-center">
      <div className="my-3">
      <Button
        icon={<Plus />}
        title="Cộng"
        buttonClass="button_secondary"
        iconClass="icon_secondary"
        titleClass="title_secondary"
        count={count}
        onClick={() => setCount(count + 1)}
      />
      <Button
        icon={<Minus />}
        title="Trừ"
        buttonClass="button_primary"
        iconClass="icon_primary"
        titleClass="title_primary"
        count={count}
        onClick={() => setCount(count - 1)}
      />
      <Button
        icon={<i className="fa-solid fa-xmark fa-2xl"></i>}
        title="Nhân đôi"
        buttonClass="button_secondary"
        iconClass="icon_secondary"
        titleClass="title_secondary"
        count={count}
        onClick={() => setCount(count * 2)}
      />
      <Button
        icon={<i className="fa-solid fa-divide fa-2xl"></i>}
        title="Chia đôi"
        buttonClass="button_primary"
        iconClass="icon_primary"
        titleClass="title_primary"
        count={count}
        onClick={() => setCount(count / 2)}
      />
      </div>
    </div>
  );
}

export default ButtonList;
