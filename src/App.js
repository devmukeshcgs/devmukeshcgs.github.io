import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;