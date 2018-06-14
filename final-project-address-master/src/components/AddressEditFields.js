import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class AddressEditFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="First Name"
                    type="string"
                    value={this.props.address.firstName}
                    onChange={e => this.props.addressChangedByUser('firstName', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Last Name"
                    type="string"
                    value={this.props.address.lastName}
                    onChange={e => this.props.addressChangedByUser('lastName', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Address"
                    type="string"
                    value={this.props.address.address}
                    onChange={e => this.props.addressChangedByUser('address', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="City"
                    type="string"
                    value={this.props.address.city}
                    onChange={e => this.props.addressChangedByUser('city', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="State"
                    type="string"
                    value={this.props.address.state}
                    onChange={e => this.props.addressChangedByUser('state', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Zip"
                    type="string"
                    value={this.props.address.zip}
                    onChange={e => this.props.addressChangedByUser('zip', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="phone"
                    type="string"
                    value={this.props.address.phone}
                    onChange={e => this.props.addressChangedByUser('phone', e)}
                    fullWidth
                />
            </div>
        );
    }
}

AddressEditFields.propTypes = {
    addressChangedByUser: PropTypes.func,
    address: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    })
};

export default AddressEditFields;