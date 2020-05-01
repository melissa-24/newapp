import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {


  return (
    <div className="App">
      <nav>
        <div className="nav-header">
          <h1>Melissa Longenberger</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <div className="footer">
        <h4>&copy; 2020 by Melissa Longenberger</h4>
      </div>
    </div>
  );
}
