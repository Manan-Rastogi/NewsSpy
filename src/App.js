import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [progress, set_Progress] = useState(0);

  const setProgress = (x) => {
    set_Progress(x);
  };
  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pagesize={12}
                country="in"
                category=""
              />
            }
          />
          {/* Concept: Using key here will force rerendering */}
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
                setProgress={setProgress}
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
};

export default App;
