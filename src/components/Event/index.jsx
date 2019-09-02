import React, { Component } from 'react';

import About from "./About";
import Coordinator from "./Coordinator";
import When from "./When";
import Success from "./Success";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: true,
            successVisible: false,



        };
    };


    handleSubmit = (e) => {
        e.preventDefault()
        alert('jest');
        this.setState({
            formVisible: !this.state.formVisible,
            successVisible: !this.state.successVisible

        })
    }


    render() {

        return (
            <div className="event">
                <header>
                    <div className="event__topColor"></div>
                    <div className="event__bottomColor">
                        <h1 className="content">New event</h1>
                    </div>
                </header>
                <div className="content">
                    <form onSubmit={this.handleSubmit} className={this.state.formVisible ? "visible" : 'invisible'}>
                        <About />
                        <Coordinator />
                        <When />
                        <div className="button_container">
                            <button type="submit" onClick={this.handleClick}>PUBLISH EVENT</button>
                        </div>
                    </form>
                    <div className={this.state.successVisible ? "visible" : 'invisible'}>
                        <Success />
                    </div>
                </div>
            </div>
        );
    };
};

export default Event;