import React, { Component } from 'react'

class Postform extends Component {

    constructor (props) {
        super(props);
        this.state = {  
            title: '',
            memo: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const memo = {
            title: this.state.title,
            memo: this.state.memo
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(memo)
        })
        // Tell it we want json data
        .then(res => res.json())
        // Make sure we can make a post and get the data back
        .then(data => console.log(data));
    }
    
    render() {
        return (
            <div>
                <h1>Add Date Idea</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Idea: </label><br />
                        <textarea type="text" name="memo" onChange={this.onChange} value={this.state.memo}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Postform;