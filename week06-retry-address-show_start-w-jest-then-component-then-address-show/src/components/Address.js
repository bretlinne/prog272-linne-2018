import React, { Component } from 'react';
import '../App.css';
import '../address-list';

class Address extends Component {
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

// we don't want Address component (this particular javascript file) to update the address-list.
// a component should not update its own properties
/*
    const logger ForIn = (myObject) => {
        for (let property in myObject) {
            if (myObject.hasOwnProperty(property)) {
                console.log(property);
            }
        }
    };
*/
    render() {
        return (
            <div className="App" id="Address">
                <hr />
                <button id="SetAddress" onClick={this.setAddress}>Get Address</button>
                <h1 className="App-title">Address Info</h1>
                <p className="App-intro">
                    First Name: {this.state.firstName} <br />
                    Last Name: {this.state.lastName} <br />
                    Address: {this.state.address} <br />
                    City: {this.state.city} <br />
                    State: {this.state.state} <br />
                    Zip: {this.state.zip} <br />
                    Phone: {this.state.phone} <br />
                    Fax: {this.state.fax} <br />
                    Toll Free: {this.state.tollfree} <br />
                </p>

            </div>
        );
    }
}

export default Address;
