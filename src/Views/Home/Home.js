import React from "react";
import { Col } from "react-bootstrap";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-primary px-5 py-3 d-flex justify-content-center mb-3">Home</div>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
        <Col xs={12} className=" bg-success p-5 mb-2"></Col>
      </div>
      
    );
  }
}


export default Home;
