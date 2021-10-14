import React from "react";
import "./NeoButton.scss";

class NeoButton extends React.Component {
    render() {

        let size = this.props.size;
        let lable = this.props.lable;
        let startIcon = this.props.startIcon;
        let endIcon = this.props.endIcon;
        let color = this.props.color;
        let figure = this.props.figure;
        let classes = this.props.class;

        size = size === "small" || size === "large" ? "button-" + size : "button-normal";
        size = lable ? size : "icon-" + size;

        color = color === "primary" || color === "secondary"  ? color : "primary";
        figure = figure === "fill" || figure === "outline" ? figure : "fill";
        const theme = "button-" + color + "-" + figure;

        classes = classes + "m-2";

        const buttonClass = "neo-button " + size + " " + theme + " " + classes;

        return (
                <button className={buttonClass}>

                    {startIcon
                    ? <span className={startIcon + (!lable && !endIcon ? "" : " me-2")} />
                    : null
                    }
                    
                    {lable}

                    {endIcon
                    ? <span className={endIcon + (!lable && !startIcon ? "" : " ms-2")} />
                    : null
                    }

                </button>

        );
    }
}


export default NeoButton;
