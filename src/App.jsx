import {  useState } from "react";
import "./App.css";
import Layout from "./Component/Layout";
import Main from "./Component/Main";
import Button from "./Component/ButtonGroup/Button";
import MinusIcon from "./Component/Icon/minus";
import Plus from "./Component/Icon/plus";
import ImageSlide from "./Component/imageSlide";
import imageList from './Component/fakeData/image.json';
import PlayList from "./Component/playList";

function App() {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      <Layout title="Đây là trang app nè">
        <PlayList/>
        <ImageSlide imageList={imageList}/>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px",
          }}
        >
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
            icon={<MinusIcon />}
            title="Trừ"
            buttonClass="button_primary"
            iconClass="icon_primary"
            titleClass="title_primary"
            count={count}
            onClick={() => setCount(count - 1)}
          />
          <Button
            icon={<i class="fa-solid fa-xmark fa-2xl"></i>}
            title="Nhân đôi"
            buttonClass="button_secondary"
            iconClass="icon_secondary"
            titleClass="title_secondary"
            count={count}
            onClick={()=> setCount(count * 2)}
          />
          <Button
            icon={<i class="fa-solid fa-divide fa-2xl"></i>}
            title="Chia đôi"
            buttonClass="button_primary"
            iconClass="icon_primary"
            titleClass="title_primary"
            count={count}
            onClick={()=> setCount(count / 2)}
          />
        </div>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
