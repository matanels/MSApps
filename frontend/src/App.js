import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  let routes;
  routes = (
    <Routes>
      <Route path="/:category?" element={<HomeScreen />} />
    </Routes>
  );
  return (
    <Router>
      <Header />
      <main className="py-4">{routes}</main>
      <Footer />
    </Router>
  );
};

export default App;
