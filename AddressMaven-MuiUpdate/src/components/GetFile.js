import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
})

class GetFile extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown'
        };
    }
    getFile = () => {
        console.log('state.file: ' + this.state.file);
        console.log('getFile called');
        this.setState({ file: 'url-file.js' });
        console.log('state.file: ' + this.state.file);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <h2 className="App-title">Dummy Component</h2>
                <p className="App-intro">file: {this.state.file}</p>

                <Button
                    color='secondary'
                    style={styles.button}
                    variant='raised'
                    onClick={this.getFile}>
                    {/*<Icon>android</Icon>&nbsp;&nbsp;&nbsp;Get File*/}
                    <Icon className={classes.leftIcon}>android</Icon>Get File
                </Button>
            </div>
        );
    }
}

GetFile.propTypes ={
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(GetFile);
