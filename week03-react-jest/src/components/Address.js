import React, {Component} from 'react';

import '../App.css';

class App extends Component {

    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        }

    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            address: address.address,
            city: address.city,
            state: address.state,
            zip: address.zip,
            phone: address.phone,
            fax: address.fax,
            tollfree: address.tollfree,
            website: address.website
        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p className="App-intro">First Name:{this.state.firstName}</p>;

                <button id='setAddress' onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default App;
