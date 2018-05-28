import React, { Component } from 'react';

import PropTypes from 'prop-types';
// Put this code near the top
import styles from './styles';
import { Text, View, Button } from 'react-native';

class AddressShow extends Component {
    constructor(props) {
        super(props);

        this.debug = false;
        if (this.debug) {
            console.log('ADDRESS-SHOW CONSTRUCTOR', this.props.address);
        }
    }

    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            console.log(message, message2, message3);
        }
    }

    render() {
        if (this.debug) {
            console.log('ADDRESS-SHOW RENDER', this.props);
        }
        return (
            <View style={styles.container}>
                <Button
                    id={"buttonFetch"}
                    style={styles.buttonView}
                    onPress={(e) => this.props.setAddress(0, e)}
                    title="Set Address"
                />
                <Button
                    id={"buttonRightOne"}
                    style={styles.buttonView}
                    onPress={(e) => this.props.setAddress(1, e)}
                    title=">"
                />
                <Button
                    id={"buttonLeftOne"}
                    style={styles.buttonView}
                    onPress={(e) => this.props.setAddress(-1, e)}
                    title="<"
                />
                <Text style={styles.addressContainer}>
                    First Name: {this.props.address.firstName}
                </Text>
                <Text style={styles.addressContainer}>
                    Last Name: {this.props.address.lastName}
                </Text>
                <Text style={styles.addressContainer}>
                    Address: {this.props.address.address}
                </Text>
                <Text style={styles.addressContainer}>
                    City: {this.props.address.city}
                </Text>
                <Text style={styles.addressContainer}>
                    State: {this.props.address.state}
                </Text>
                <Text style={styles.addressContainer}>
                    Zip: {this.props.address.zip}
                </Text>
                <Text style={styles.addressContainer}>
                    Phone: {this.props.address.phone}
                </Text>
                <Text style={styles.addressContainer}>
                    Fax: {this.props.address.fax}
                </Text>
                <Text style={styles.addressContainer}>
                    Toll Free: {this.props.address.tollfree}
                </Text>
            </View>
        );
    }
}
AddressShow.propTypes = {
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

export default AddressShow;
