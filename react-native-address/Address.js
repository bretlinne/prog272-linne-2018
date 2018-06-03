import React, { Component } from 'react';
import AddressShow from './AddressShow';
import AddressList from './address-list';
import styles from './styles';
import { Text, View } from 'react-native';

class Address extends Component {
    constructor(props) {
        super(props);

        this.addressIndex = 0;
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
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Address Info</Text>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />
            </View>
        );
    }
}

export default Address;
