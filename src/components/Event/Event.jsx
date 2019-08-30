import React, { Component } from 'react';

import About from "../About/About";

class Event extends Component {

    render() { 
        return (
            <div className="event">
                <header>
                    <div className="event__topColor"></div>
                    <div className="event__bottomColor">
                        <p className="container">New event</p>
                    </div>
                </header>
                <div className="content">
                    <About/>
                </div>
            </div>
         );
    }
}
 
export default Event;