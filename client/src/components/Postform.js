import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {

    // constructor (props) {
    //     super(props);
    state = {
        title: '',
        body: ''
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Date Idea</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="post-card">
                        <div>
                            <label>Title: </label><br />
                            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                        </div>
                        <br />
                        <div>
                            <label>Idea: </label><br /><br />
                            <textarea type="text" name="body" onChange={this.onChange} value={this.state.body} />
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);