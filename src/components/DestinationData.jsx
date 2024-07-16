import { Component } from "react";
import Mountain1 from "../assets/img/1.jpg";
import Mountain2 from "../assets/img/2.jpg";
import Mountain3 from "../assets/img/3.jpg";
import Mountain4 from "../assets/img/4.jpg";
import PropTypes from 'prop-types';
import "./DestinationStyle.css";

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

DestinationData.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default DestinationData
