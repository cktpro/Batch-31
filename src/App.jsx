import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import Main from "./Component/Main";
import PlayList from "./Component/playList";
import Form from "Component/Form";
import ButtonList from "Component/ButtonGroup/ButtonList";
import CardList from "Component/CardList";
import { memo } from "react";

function App() {
  return (
    <div className="App">
      <Form/>
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
export default memo(App);
