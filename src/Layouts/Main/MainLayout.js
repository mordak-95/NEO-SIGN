import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router";
import "./MainLayout.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class MainLayout extends React.Component {
  render() {
    let { component, ...rest } = this.props;
    const Component = component;

    return (
      <Route {...rest} render={() => (
        <div className="main-background">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="main-layout">

            <Header/>

            <Container className="my-3">
              <Component />
            </Container>

            <Footer/>


          </div>
        </div>
      )} />
    );
  }
}


export default MainLayout;
