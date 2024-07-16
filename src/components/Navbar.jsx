import { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Travel</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) => isActive ? `${item.cName} active` : item.cName}
                                    to={item.url}
                                >
                                    <i className={item.icon}></i>{item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
