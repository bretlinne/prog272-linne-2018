import React, { Component } from 'react';
import AddressShow from './AddressShow';
import tempAddressList from './address-list';
import styles from './styles';
import { Text, View } from 'react-native';

class Address extends Component {
    // OLD
    /*constructor(props) {
        super(props);

        this.addressIndex = 0;
        this.state = {
            address: AddressList[this.addressIndex]
        };
        this.debug = true;
    }*/
    constructor() {
        super();
        this.debug = false;
        this.canceled = false;
        // this key's vlaue is assigned to be the whole set of address fields
        // in the address-list.js file, according to the index sent. Index 0
        // is all values are unknown.  index 1 is Curly Howard.  I think it's
        // still useful to have the static data in here for unknown data as the
        // initialization point.
        this.state = {
            addressIndex: 0,
            addressList: [{}],
            address: tempAddressList[0]
        };

    }
    componentDidMount() {
        this.getAddressList();
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    /* OLD
    setAddress = () => {
        //const address = this.props.addressList[1];
        this.addressIndex = 1;

        this.setState({
            address: AddressList[this.addressIndex]
        });
    };
*/
    setAddress = (offset) => {
        if (this.debug) {
            console.log('setAddress called.');
        }
        let value = this.state.addressIndex;
        value += offset;
        if (value > this.state.addressList.length-1){
            value = this.state.addressList.length-1;
        }
        else if (value < 0){
            value = 0;
        }
        this.setState({addressIndex: value });
        this.setState({address: this.state.addressList[value] });
    };

    getAddressList = () =>{
        fetch('http://ec2-34-213-102-226.us-west-2.compute.amazonaws.com:30026/address-list')
            .then(response => response.json())
            .then(addressListFromServer =>{
                if(!this.cancelled){
                    this.setState({addressList: addressListFromServer});
                    this.setState({index: 0});
                }
            })
            .catch(function(ex) {
                console.log('something went wrong', ex);
            });
    }

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
