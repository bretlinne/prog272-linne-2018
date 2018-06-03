import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import AddressShow from './AddressShow';
import AddressList from '../address-list';

class Address extends Component {
    constructor(props) {
        super(props);

        this.addressIndex=0;
        this.state = {
            address: AddressList[this.addressIndex]
        };
        this.debug = true;

    }

    setAddress = () => {
        //const address = this.props.addressList[1];
        this.addressIndex = 1;

        this.setState({
            address: AddressList[this.addressIndex]
        })
    };

    render() {
        return (
            <div className="App" id="Address">
                <hr />
                <h1 className="App-title">Address Info</h1>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress} />
            </div>
        );
    }
}

export default Address;
