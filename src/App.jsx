import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import Main from "./Component/Main";
import PlayList from "./Component/playList";
import Form from "Component/Form";
import ButtonList from "Component/ButtonGroup/ButtonList";
import CardList from "Component/CardList";

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/media" element={<PlayList />} />
        {/* <Route path="/products" element={<PlayList />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/math" element={<ButtonList />} />
        <Route path="/products" element={<CardList />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </Layout>
      {/* <Layout title="Đây là trang app nè">
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
      </Layout> */}
    </div>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export default App;
