import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/productActions";
import Table from "./components/Table/Table.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Nav from "./components/Nav/Nav.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  dispatch(getProducts());

  return (
    <div className="App">
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 50,
          padding: 20,
          height: "100%",
        }}
      >
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            marginLeft: 25,
          }}
        >
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
