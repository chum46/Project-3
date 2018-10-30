import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <button type="button">
                        HOME
                    </button>
                </Link>
                <Link to="/memos">
                    <button type="button">
                        MY IDEAS
                    </button>
                </Link>
                <Link to="/food">
                    <button type="button">
                        RESTAURANT SEARCH
                    </button>
                </Link>
                <Link to="/eventsearch">
                    <button type="button">
                        FIND EVENTS
                    </button>
                </Link>
                <Link to="/activities">
                    <button type="button">
                        ACTIVITY TIPS
                    </button>
                </Link>
            </nav>
        );
    }
}

export default NavBar;
