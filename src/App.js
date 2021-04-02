import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Row from "./Row";
import Footer from "./Footer";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Search />
      <Row />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
