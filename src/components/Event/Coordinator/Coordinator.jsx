import React, { Component } from 'react';

class Coordinator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            employes: [],
            defaultUser: '',
            // loggedUser: {
            //     id: 3,
            // }

        };
    };



    componentDidMount() {
        fetch('./mocks/employes.json').then(res => res.json()).then((data) => {
            this.setState({
                employes: data,
                defaultUser: data[3].name + ' ' + data[3].lastname,
                // Zwrócić wszystkich których ID jest różne od 3 

            })
            //    console.log(data[3].lastname)
        });
    };




    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }




    render() {

        

        const employesList = this.state.employes.map(elem =>
            <option key={elem.id} value={elem.name.toLowerCase()}>{elem.name} {elem.lastname}</option>);

        console.log(employesList[3])

            return (
                <div className="coordinator box">
                    <h2>Coordinator</h2>
                    <div className="under_line" />
                    <form>
                        <div className="input_container">
                            <h3>RESPONSIBLE <span>*</span></h3>
                            <select>
                                <option defaultValue>{this.state.defaultUser}</option>
                                {employesList}
                            </select>
                        </div>
                        <div className="input_container">
                            <h3>EMAIL</h3>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                        </div>
                    </form>
                </div>
            );
        };
};

export default Coordinator;