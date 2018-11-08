import React, { Component } from 'react'
// import Posts from '../../components/Posts';
import Foodsearch from '../../components/Foodsearch';
import Food from '../../components/Food';

class Foodpage extends Component {
    render() {
        return (
            <div>
                <Foodsearch />
                <hr />
                <Food />
            </div>
        );
    }
}

export default Foodpage;