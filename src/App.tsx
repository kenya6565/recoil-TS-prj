import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  );
};

export default App;
