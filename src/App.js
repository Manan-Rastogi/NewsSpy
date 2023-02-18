import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News pagesize={20} country="in" category="" />}
            />
            {/* Concept: Using key here will force rerendering */}
            <Route
              exact
              path="/business"
              element={<News key="business" pagesize={20} country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News key="entertainment" pagesize={20} country="in" category="entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News key="general" pagesize={20} country="in" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News key="health" pagesize={20} country="in" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News key="science" pagesize={20} country="in" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News key="sports" pagesize={20} country="in" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News key="technology" pagesize={20} country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
