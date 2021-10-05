import React from "react";
import { Col } from "react-bootstrap";
import "./Home.scss";
import NeoButton from "../../Components/NeoButton/NeoButton";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="primary-background px-5 py-4 d-flex justify-content-center mb-3">Home</div>

        <Col xs={12} className=" secondary-background p-4 mb-2">
          <NeoButton
            size="small"
            lable="Mine"
            startIcon="neo-icon-droplet"
            endIcon="neo-icon-diamonds"
            color="secondary"
            figure="outline"
          />
        </Col>
      </div>

    );
  }
}


export default Home;
