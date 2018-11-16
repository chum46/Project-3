import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
            <nav>
                <Link to="/">
                    <button className="navBarButton" type="button">
                        HOME
                    </button>
                </Link>
                <Link to="/food">
                    <button className="navBarButton" type="button">
                        FOOD
                    </button>
                </Link>
                <Link to="/events">
                    <button className="navBarButton" type="button">
                        EVENTS
                    </button>
                </Link>
                <Link to="/activities">
                    <button className="navBarButton" type="button">
                        ACTIVITIES
                    </button>
                </Link>
                <Link to="/memos">
                    <button className="navBarButton" type="button">
                        IDEAS
                    </button>
                </Link>
            </nav>
            </div>
        );
    }
}

export default NavBar;
