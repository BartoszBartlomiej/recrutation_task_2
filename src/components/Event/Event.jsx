import React, { Component } from 'react';

import About from "../About/About";
import Coordinator from "../Coordinator/Coordinator";
import When from "../When/When";



class Event extends Component {

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
                </div>
            </div>
         );
    }
}
 
export default Event;