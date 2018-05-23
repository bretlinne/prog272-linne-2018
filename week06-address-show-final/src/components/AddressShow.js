import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import PropTypes from 'prop-types';

class AddressShow extends Component {
    constructor(props) {
        super(props);

        this.debug = true;
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
                <hr />
                <button id="showAddressClick" onClick={this.props.setAddress}>Show Address</button>
                <h1 className="App-title">Address Info</h1>
                <p className="App-intro">
                    First Name: {this.props.address.firstName} <br />
                    Last Name: {this.props.address.lastName} <br />
                    Address: {this.props.address.address} <br />
                    City: {this.props.address.city} <br />
                    State: {this.props.address.state} <br />
                    Zip: {this.props.address.zip} <br />
                    Phone: {this.props.address.phone} <br />
                    Fax: {this.props.address.fax} <br />
                    Toll Free: {this.props.address.tollfree} <br />
                </p>

            </div>
        );
    }
}

export default AddressShow;
