import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',

        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }





    render() {
        return (
            <div className="about box">
                <h2>About</h2>
                <div className="under_line" />
                <form>
                    <div className="input_container">
                        <p>TITLE <span>*</span></p>
                        <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Make it short and clear" />
                    </div>
                    <div className="input_container">
                        <p>DESCRIPTION <span>*</span></p>
                        <div className="textarea_container">
                            <textarea value={this.state.description} onChange={this.handleDescriptionChange} maxLength='140' placeholder="Write about your event, be creative" />
                            <div className="counter_container">
                                <p>Max lenght 140 characters</p>
                                <p>0/140</p>
                            </div>
                        </div>
                    </div>
                    <div className="input_container">
                        <p>CATEGORY</p>
                    </div>
                    <div className="input_container">
                        <p>PAYMENT</p>
                        <input type="checkbox"></input>
                    </div>
                </form>




            </div>
        );
    }
}

export default About;