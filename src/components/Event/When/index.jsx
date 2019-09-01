import React, { Component } from 'react';

class When extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            duration: '',
        };
    };

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value,
        });
    };

    handleTimeChange = (e) => {
        this.setState({
            time: e.target.value,
        });
    };

    handleDurationChange = (e) => {
        this.setState({
            duration: e.target.value,
        });
    };

    render() {

        return (
            <div className="when box">
                <h2>When</h2>
                <div className="under_line" />
                <form>
                    <div className="input_container">
                        <h3>STARTS ON <span>*</span></h3>
                        <input type="date" name="date" min={new Date()} value={this.state.date} onChange={this.handleDateChange} required />
                        <p>at</p>
                        <input type="time" name="time" value={this.state.time} onChange={this.handleTimeChange} required />
                        <div className="radio_container">
                            <input type="radio" name='AM/PM' defaultChecked />
                            <p>AM</p>
                            <input type="radio" name='AM/PM' />
                            <p>PM</p>
                        </div>
                    </div>
                    <div className="input_container">
                        <h3>DURATION</h3>
                        <input type="number" name="duration" value={this.state.duration} onChange={this.handleDurationChange} placeholder="Number" />
                        <p>hour</p>
                    </div>
                </form>

            </div>
        );
    };
};

export default When;