import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import AddressEdit from './AddressEdit';
import blue from '@material-ui/core/colors/blue';
import MuiButton from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    }),
});

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

    render() {
        const {classes} = this.props;
        const editDialog = this.state.editOpen ? (
            <AddressEdit
                address={this.props.name}
                open={this.state.editOpen}
                addressEdit={this.addressEdit}
            />
        ) : (
            <div/>
        );

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <div className="App">
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={(e) => this.props.setAddress(-10, e)}
                        >
                            <Icon>fast_rewind</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={(e) => this.props.setAddress(-1, e)}
                        >
                            <Icon>arrow_back_ios</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={this.props.showAddress}
                        >
                            <Icon>cloud_download</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={event => this.props.setAddress(1, event)}
                        >
                            <Icon>arrow_forward_ios</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={event => this.props.setAddress(10, event)}
                        >
                            <Icon>fast_forward</Icon>
                        </MuiButton>

                    </div>
                    <div className="App">
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={this.save}
                        >
                            <Icon>save</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            <Icon>delete</Icon>
                        </MuiButton>
                        <MuiButton
                            color={blue}
                            variant='raised'
                            onClick={() => this.setState({editOpen: true})}
                        >
                            <Icon>edit</Icon>
                        </MuiButton>
                        {editDialog}
                    </div>
                    <p className="App-intro">
                        First Name: {this.props.name.firstName}
                    </p>
                    <p className="App-intro">
                        Last Name: {this.props.name.lastName}
                    </p>
                    <p className="App-intro">
                        Address: {this.props.name.address}
                    </p>
                    <p className="App-intro">City: {this.props.name.city}</p>
                    <p className="App-intro">State: {this.props.name.state}</p>
                    <p className="App-intro">Zip: {this.props.name.zip}</p>
                    <p className="App-intro">Phone: {this.props.name.phone}</p>
                    <p className="App-intro">Online: {this.props.name.contact}</p>

                </Paper>
            </div>
        );
    }
}
AddressShow.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AddressShow);

