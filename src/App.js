import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Row from "./Row";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Row />
        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
