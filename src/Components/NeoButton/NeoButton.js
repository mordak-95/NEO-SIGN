import React from "react";
import "./NeoButton.scss";

class NeoButton extends React.Component {
    render() {

        const size = this.props.size ? "button-" + this.props.size : "button-normal";
        const color = this.props.color ? this.props.color : "primary";
        const figure = this.props.figure ? this.props.figure : "fill";
        const theme = color + "-" + figure
        const buttonClass = "neo-button " + size + " " + theme;

        return (
            <div>
                <button className={buttonClass}>

                    {this.props.startIcon
                    ? <span className={this.props.startIcon + " me-2"} />
                    : null
                    }
                    
                    {this.props.lable}

                    {this.props.endIcon
                    ? <span className={this.props.endIcon + " ms-2"} />
                    : null
                    }

                </button>
            </div>

        );
    }
}


export default NeoButton;
