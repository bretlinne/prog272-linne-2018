import React, {Component} from 'react';
//import logo from './logo.svg';
//import '../Address.css';
//import PouchDB from 'pouchdb';
import AddressShow from './AddressShow';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    formControl:{
        marginLeft: theme.spacing.unit,
    }
});
class Address extends Component {
    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [{
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown',
                address: 'unknown',
                city: 'unknown',
                state: 'unknown',
                zip: 'unknown',
                phone: 'unknown',
                contact: 'unknown'
            }]
        };
    }

    componentDidMount() {
        this.props.dataManager.watchChanges(this.watcher);
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    watcher = event => {
        console.log('Watch Change', event);
        this.showAddress();
    };

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName,
                        address: address.address,
                        city: address.city,
                        state: address.state,
                        zip: address.zip,
                        phone: address.phone,
                        contact: address.contact
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    setAddress = (offset) => {
        const value = this.state.namesIndex + offset;
        if (value >= 0 && value <= this.state.names.length - 1) {
            this.setState({ namesIndex: value, open: this.state.editOpen });
        }
    };

    save = (name) => {
        console.log("FOOBAR NAME: "+ name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (name) => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };




    addAddressReal = () => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({addressIndex: indexValue});
         const address = {
             _id: new Date().toISOString(),
             firstName: this.state.firstName,
             lastName: this.state.lastName,
             address: this.state.address,
             completed: false
         };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted a r!');
            }
        });
        this.state.ids.push(address._id);
        // You call this.setState and set the new ids value.
        //this.setState()
    };

    handleAddress = event => {
        this.setState({address: event.target.value});
    };

    render() {
        //const {classes} = this.props;
        return (
            <AddressShow
                name={this.state.names[this.state.namesIndex]}
                showAddress={this.showAddress}
                setAddress={this.setAddress}
                save={this.save}
                delete={this.delete}
            />
        );
    }
}
Address.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Address);
//export default Address;
