import React, { Component } from 'react';

import About from "./About";
import Coordinator from "./Coordinator";
import When from "./When";
import Success from "./Success";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideForm: true,
            showSuccess: false,
            


        };
    };


    handleSubmit = (e) => {
        e.preventDefault()
        alert('jest');
        this.setState({
            // display: !this.state.display,
    
            
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
                    <form onSubmit={this.handleSubmit} className={this.state.display ? "show" : 'hide'}> 
                        <About />
                        <Coordinator />
                        <When />
                        <div className="button_container">
                            <button type="submit" onClick={this.handleClick}>PUBLISH EVENT</button>
                        </div>
                    </form>
                    <Success className={this.state.display ? "hide" : 'show'} />
                </div>
            </div>
        );
    };
};

export default Event;