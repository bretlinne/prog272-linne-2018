import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import PropTypes from 'prop-types';
// Put this code near the top
import RaisedButton from 'material-ui/RaisedButton';
//import ActionAndroid from 'material-ui/svg-icons/action/android';

import FontIcon from 'material-ui/FontIcon';
import { blueGrey50 } from 'material-ui/styles/colors';
import styles from './styles';

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
            <div className="App">
                <RaisedButton
                    id={"leftTen"}
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={blueGrey50}>
                            fast_rewind

                        </FontIcon>}
                    style={styles.button}
                    onClick={(e) => this.props.setAddress(-10, e)}
                />
                <RaisedButton
                    id={"leftOne"}
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={blueGrey50}>
                            arrow_back_ios

                        </FontIcon>}
                    style={styles.button}
                    onClick={(e) => this.props.setAddress(-1, e)}
                />
                <RaisedButton
                    id={"fetchAddresses"}
                    label="Fetch Addresses"
                    labelPosition="before"
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={blueGrey50}>
                            cloud_download
                        </FontIcon>
                    }
                    style={styles.button}
                    //onClick={this.props.setAddress}
                    // does is work to assign the address prop to the return of
                    // the fetchAddress call?  No--it says address is read-only.
                    //onClick={this.props.address=this.props.fetchAddress}
                    //onClick={(e) => {this.props.setAddress(1, e); this.disabled=true}}
                    onClick={(e) => this.props.setAddress(0, e)}

                />
                <RaisedButton
                    id={"rightOne"}
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={blueGrey50}>
                            arrow_forward_ios

                    </FontIcon>}
                    style={styles.button}
                    onClick={(e) => this.props.setAddress(1, e)}
                />
                <RaisedButton
                    id={"rightTen"}
                    primary={true}
                    icon={
                        <FontIcon className="material-icons" color={blueGrey50}>
                            fast_forward

                        </FontIcon>}
                    style={styles.button}
                    onClick={(e) => this.props.setAddress(10, e)}
                />
                <p className="App-intro">
                    First Name: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    Last Name: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    Address: {this.props.address.address}
                </p>
                <p className="App-intro">City: {this.props.address.city}</p>
                <p className="App-intro">State: {this.props.address.state}</p>
                <p className="App-intro">Zip: {this.props.address.zip}</p>
                <p className="App-intro">Phone: {this.props.address.phone}</p>
                <p className="App-intro">Fax: {this.props.address.fax}</p>
                <p className="App-intro">
                    Toll Free: {this.props.address.tollfree}
                </p>
            </div>
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
    setAddress: PropTypes.func,
    fetchAddress: PropTypes.func
};
export default AddressShow;
