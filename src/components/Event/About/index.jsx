import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            reward: '',
            categories: [],
            selectStyle: 'bruce-wayne',
            fee: false,
        };
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            selectStyle: 'batman',
        });
    };

    componentDidMount() {
        fetch('./mocks/categories.json').then(res => res.json()).then((data) => {
            this.setState({
                categories: data,
            })
        });
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    handleRewardChange = (e) => {
        this.setState({
            reward: e.target.value,
        });
    };

    handleChecked = (e) => {
        console.log(e.target)
        this.setState({
            fee: !this.state.fee
        });
    };


    render() {

        const categoryList = this.state.categories.map(elem =>
            <option key={elem.id} value={elem.name.toLowerCase()}>{elem.name}</option>);

        return (
            <div className="about box">
                <h2>About</h2>
                <div className="under_line" />
                <div className="form_container" >
                    <div className="input_container">
                        <h3>TITLE <span>*</span></h3>
                        <input type="text" name="title" value={this.props.title} onChange={this.handleTitleChange} placeholder="Make it short and clear" required />
                    </div>
                    <div className="input_container">
                        <h3>DESCRIPTION <span>*</span></h3>
                        <div className="textarea_container">
                            <textarea type="text" name="description" value={this.state.description} onChange={this.handleDescriptionChange} maxLength='140' placeholder="Write about your event, be creative" required />
                            <div className="counter_container">
                                <p>Max length 140 characters</p>
                                {/* <p>{this.state.description.length}/140</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="input_container">
                        <h3>CATEGORY</h3>
                        <select name="category" className={this.state.selectStyle} onClick={this.handleClick}>
                            <option defaultValue hidden>Select category (skills, interests, locations)</option>
                            {categoryList}
                        </select>
                    </div>
                    <div className="input_container">
                        <h3>PAYMENT</h3>
                        <input type="radio" name="payment" id="free" defaultChecked onClick={this.handleChecked}></input>
                        <span>Free event</span>
                        <input type="radio" name="payment" id="paid" onClick={this.handleChecked}></input>
                        <span>Paid event</span>
                        <div className={this.state.fee ? "fee_visible" : "fee_invisible"}>
                            <input type="number" placeholder="Fee"></input>
                            <span>$</span>
                        </div>
                    </div>
                    <div className="input_container">
                        <h3>REWARD</h3>
                        <input type="number" name="reward" value={this.state.reward} onChange={this.handleRewardChange} placeholder="Number" />
                        <span>reward points for attendance</span>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;