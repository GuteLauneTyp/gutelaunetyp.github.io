import * as React from 'react';
import './App.css';
import {Router} from "react-router-ts";
import AppNavigation from "./components/navigation/AppNavigation";
import AppRoutes from "./components/navigation/AppRoutes";
import {routeMatcherFactory} from "./components/navigation/routeMatchFactory";
import HeaderImage from "./components/header/HeaderImage";


function App() {
  return (
    <Router routeMatcherFactory={routeMatcherFactory}>
      <div className="app">
        <HeaderImage />
        <AppNavigation/>
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
