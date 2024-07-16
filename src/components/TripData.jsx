import "./TripStyle.css";
import PropTypes from 'prop-types';


function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

TripData.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TripData