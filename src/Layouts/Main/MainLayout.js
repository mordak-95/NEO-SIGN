import React from "react";
import { Route } from "react-router";
import "./MainLayout.scss";

class MainLayout extends React.Component {
  render() {
    let {component, ...rest} = this.props;
    const Component = component;

    return (
      <Route {...rest} render = {() => (
        <div>
          <Component/>
        </div>
      )}/>
    );
  }
}


export default MainLayout;
