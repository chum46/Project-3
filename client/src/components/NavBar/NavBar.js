// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import "./NavBar.css";
import React, { Component } from 'react'
// import { Link } from "react-router-dom";


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

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

// function TextButtons(props) {
//   const { classes } = props;
//   return (
//     <div id="navigation">
//       <Link className="nav-link" to="/foodSearch">Food Search</Link>
//       <Link className="nav-link" to="/eventSearch">Event Search</Link>
//       <Link className="nav-link" to="/activities">Activities</Link>
//       <Link className="nav-link" to="/memos">Memos</Link>
//     </div>
//   );
// }

// TextButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TextButtons);


export default NavBar;


