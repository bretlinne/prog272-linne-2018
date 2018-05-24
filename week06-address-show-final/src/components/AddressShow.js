import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    constructor(props) {
        super(props);

        this.debug = false;
        if(this.debug){

            console.log('ADDRESS-SHOW CONSTRUCTOR', this.props.address);
        }

    }

    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            console.log(message, message2, message3);
        }
    }
    propTypes = {
        address: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            address: PropTypes.string,
            city: PropTypes.string,
            state: PropTypes.string,
            zip: PropTypes.string,
            phone: PropTypes.string,
            fax: PropTypes.string,
            tollfree: PropTypes.string

        }),
        setAddress: PropTypes.func
    };
    render() {
        if(this.debug){ console.log('ADDRESS-SHOW RENDER', this.props);}
        return (
            <div className="App">
                <button id="showAddressClick" onClick={this.props.setAddress}>Show Address</button>

                <p className="App-intro">First Name: {this.props.address.firstName}</p>
                <p className="App-intro">Last Name: {this.props.address.lastName}</p>
                <p className="App-intro">Address: {this.props.address.address}</p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Fax: {this.props.address.fax}</p>
                <p className="App-intro">Toll Free: {this.props.address.tollfree}</p>
            </div>
        );
    }
}

export default AddressShow;
