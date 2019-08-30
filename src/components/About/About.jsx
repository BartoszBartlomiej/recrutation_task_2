import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',

        }
    }


    render() {
        return (
            <div className="about box">
                <h2>About</h2>
                <div className="under_line" />
                



            </div>
        );
    }
}

export default About;