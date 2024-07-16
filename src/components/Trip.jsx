import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/img/4.jpg";
import Trip2 from "../assets/img/5.jpg";
import Trip3 from "../assets/img/8.jpg";
import Trip4 from "../assets/img/6.jpg";
import Trip5 from "../assets/img/10.jpg";
import Trip6 from "../assets/img/11.jpg";
import PropTypes from 'prop-types';

function Trip({ limit }) {
    const trips = [
        { image: Trip1, heading: "Trip in Indonesia", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." },

        { image: Trip2, heading: "Trip in France", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." },

        { image: Trip3, heading: "Trip in Hawai", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." },

        { image: Trip4, heading: "Trip in Canada", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." },

        { image: Trip5, heading: "Trip in Australia", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." },

        { image: Trip6, heading: "Trip in Italia", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi fugiat vitae deleniti quae neque laudantium modi, officiis alias iure accusamus porro ea, consequatur maxime iste hic repellat voluptatum nesciunt illum inventore. Deleniti, explicabo voluptatem debitis odio modi ex. Tenetur officia vitae vel voluptatibus nostrum rem saepe maxime blanditiis esse." }
    ];

    const limitedTrips = limit ? trips.slice(0, limit) : trips;

    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps</p>
            <div className="tripcard">
                {limitedTrips.map((trip, index) => (
                    <TripData
                        key={index}
                        image={trip.image}
                        heading={trip.heading}
                        text={trip.text}
                    />
                ))}
            </div>
        </div>
    );
}

Trip.propTypes = {
    limit: PropTypes.string.isRequired,
};

export default Trip;
