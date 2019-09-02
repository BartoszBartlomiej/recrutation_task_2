import React, { Component } from 'react';

class Coordinator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            employes: [],
            defaultUser: '',
            loggedUser: {
                id: 3,
            },

        };
    };

    componentDidMount() {
        fetch('./mocks/employes.json').then(res => res.json()).then((data) => {
            this.setState({
                employes: data.filter(emp => {return emp.id !== 3 }),
                defaultUser: data[3].name + ' ' + data[3].lastname,
            });
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    render() {

        const employesList = this.state.employes.map(elem =>
            <option key={elem.id} value={elem.name}>{elem.name} {elem.lastname}</option>);

        return (
            <div className="coordinator box">
                <h2>Coordinator</h2>
                <div className="under_line" />
                <div className="form_container">
                    <div className="input_container">
                        <h3>RESPONSIBLE <span>*</span></h3>
                        <select name="responsible" required>
                            <option defaultValue>{this.state.defaultUser}</option>
                            {employesList}
                        </select>
                    </div>
                    <div className="input_container">
                        <h3>EMAIL</h3>
                        <input type="email" name="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                    </div>
                </div>
            </div>
        );
    };
};

export default Coordinator;