import React, {Component} from 'react';
//import logo from './logo.svg';
//import '../Address.css';
import PouchDB from 'pouchdb';
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
                lastName: 'unknown'
            }]
        };
    }

    componentDidMount() {

    }

    showAddress = () => {
        const that = this;
        let ids = [];
        const getIds = this.state.ids.length === 0;
        this.db.allDocs({include_docs: true, descending: true}, function (err, doc) {
            console.log(doc.rows);
            if (getIds) {
                ids = doc.rows.map((row) => {
                    return row.id;
                });
                that.setState({ids: ids});
            }
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
        const {classes} = this.props;
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

/*
<div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">First Name</InputLabel>
                        <Input id="name-simple"
                               value={this.state.firstName}
                               onChange={this.handleFirst}/>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Last Name</InputLabel>
                        <Input id="name-simple"
                               value={this.state.lastName}
                               onChange={this.handleLast}/>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Address</InputLabel>
                        <Input id="name-simple"
                               value={this.state.address}
                               onChange={this.handleAddress}/>
                    </FormControl>

                </div>
 */