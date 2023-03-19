import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (x) => {
    this.setState({ progress: x });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} pagesize={12} country="in" category="" />}
            />
            {/* Concept: Using key here will force rerendering */}
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pagesize={12}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pagesize={12}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pagesize={12}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pagesize={12}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pagesize={12}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pagesize={12}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pagesize={12}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
