import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styles from './styles';
import AddressEdit from './AddressEdit';
import { withStyles } from '@material-ui/core/styles';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown',
                address: 'unknown',
                city: 'unknown',
                state: 'unknown',
                zip: 'unknown',
                phone: 'unknown',
                contact: 'unknown'
            }
        };
        this.debug = false;
        if (this.debug) {
            console.log('ADDRESS-SHOW CONSTRUCTOR', this.props.address);
        }
    }
    setEdits = (name, event) => {
        const data = this.props.name;
        //var data = this.props.name;
        data[name] = event.target.value;
        this.setState({edits: data});
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({editOpen: false});
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    save = () => {
        this.props.save(this.state.edits);
    };
    log(message, message2 = '', message3 = '') {
        if (this.debug) {
            console.log(message, message2, message3);
        }
    }

    render() {
        if (this.debug) {
            console.log('ADDRESS-SHOW RENDER', this.props);
        }
        const editDialog = this.state.editOpen ? (
            <AddressEdit
                address={this.props.address}
                open={this.state.editOpen}
                addressEdit={this.addressEdit}
            />
        ) : (
            <div/>
        );
        return (
            <div className="App">
                <Button
                    id={"leftTen"}
                    color='primary'
                    style={styles.button}
                    variant='raised'
                    onClick={(e) => this.props.setAddress(-10, e)}>
                    <Icon>fast_rewind</Icon>
                </Button>
                <Button
                    id={"leftOne"}
                    color='primary'
                    style={styles.button}
                    variant='raised'
                    onClick={(e) => this.props.setAddress(-1, e)}>
                    <Icon>arrow_back_ios</Icon>
                </Button>
                <Button
                    id={"fetchAddresses"}
                    color='primary'
                    style={styles.button}
                    variant='raised'
                    onClick={(e) => this.props.setAddress(0, e)}>
                    <Icon>cloud_download</Icon>
                </Button>
                <Button
                    id={"rightOne"}
                    color='primary'
                    style={styles.button}
                    variant='raised'
                    onClick={(e) => this.props.setAddress(1, e)}>
                    <Icon>arrow_forward_ios</Icon>
                </Button>
                <Button
                    id={"rightTen"}
                    color='primary'
                    style={styles.button}
                    variant='raised'
                    onClick={(e) => this.props.setAddress(10, e)}>
                    <Icon>fast_forward</Icon>
                </Button>
                <div>
                    <Button
                        id={"edit"}
                        color='secondary'
                        style={styles.button}
                        variant='raised'
                        onClick={() => this.setState({editOpen: true})}
                    >
                        <Icon>edit</Icon>
                    </Button>
                    {editDialog}
                </div>

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
    classes: PropTypes.object.isRequired
    /*address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
        phone: PropTypes.string,
        contact: PropTypes.string
    }),
    setAddress: PropTypes.func,
    fetchAddress: PropTypes.func*/
};
export default withStyles(styles)(AddressShow);
