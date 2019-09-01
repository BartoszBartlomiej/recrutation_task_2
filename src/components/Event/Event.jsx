import React, { Component } from 'react';

import About from "./About";
import Coordinator from "./Coordinator";
import When from "./When";
import Success from "./Success";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

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

                    <About />
                    <Coordinator />
                    <When />
                    <div className="button_container">
                        <button>PUBLISH EVENT</button>
                    </div>
                    <Success />

                </div>
            </div>
        );
    };
};

export default Event;