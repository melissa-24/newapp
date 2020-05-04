import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'

export default function App() {

  const [products, setProducts] = useState();
  return (
    <div className="App">
      <nav>
        <div className="nav-header">
          <h1>Melissa Longenberger</h1>
        </div>
        <div className="nav-links">
         <Link to="/">Home</Link>
          Projects
        </div>
      </nav>
      <Switch>
      <Route path="/" component={Home} />
      </Switch>
      <div className="home-page">
        Home Page Information
      </div>
      <div className="footer">
        <h4>&copy; 2020 by Melissa Longenberger</h4>
      </div>
    </div>
  );
}
