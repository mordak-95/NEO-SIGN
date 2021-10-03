import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            AppRoutes.map((routeInfo,index) => {
              const {Layout, path, Component, exact} = routeInfo;
              return (<Layout key={index} path={path} component={Component} exact={exact}/>);
            })
          }
        </Switch>
      </Router>
    );
  }
}


export default App;
