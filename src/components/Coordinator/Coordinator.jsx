import React, { Component } from 'react';

class Coordinator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
           
        };
    };

    handleEmailChange = (e) => {
        this.setState({ 
            email: e.target.value,
        })
    }



    
    render() {
        return (
            <div className="coordinator box">
                <h2>Coordinator</h2>
                <div className="under_line" />
                <form>
                <div className="input_container">
                        <h3>RESPONSIBLE <span>*</span></h3>
                       
                    </div>
                <div className="input_container">
                        <h3>EMAIL</h3>
                        <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                    </div>
                </form>
            </div>
        );
    };
};

export default Coordinator;