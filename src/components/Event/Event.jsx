import React, { Component } from 'react';

import About from "./About/About";
import Coordinator from "./Coordinator/Coordinator";
import When from "./When/When";
import Success from "./Success/Success";




class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gowno: 'block'


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
    }
}

export default Event;