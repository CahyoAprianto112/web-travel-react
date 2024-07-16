import "./HeroStyle.css";
import PropTypes from 'prop-types';

function Hero(props) {
    return (
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg} />

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>
    );
}

Hero.propTypes = {
    cName: PropTypes.string.isRequired,
    heroImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    btnClass: PropTypes.string.isRequired,
};


export default Hero
