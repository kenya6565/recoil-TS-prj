import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import { Text } from "./components/Text";

const App = () => {
  return (
    <main>
      <Navbar />
      <CardContainer />
      <Text as="h1">Hello React</Text>
      <Text as="h2">Good Bye React</Text>
      <Text as="span">Good Bye React</Text>

    </main>
  );
};

export default App;
