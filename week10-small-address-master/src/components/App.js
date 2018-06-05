import React, {Component} from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
import Home from './Home';
import Header from './Header';
import Address from './Address';
import InitializeDatabase from './InitializeDatabase';

const styles = theme => ({
    container: {
        flexGrow: 1
    }
});
class App extends Component {
    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        const{classes} = this.props;
        return (
                <BrowserRouter>
                    <div className="App">
                        <Header />
                        <Route id="home" exact path="/" component={Home} />
                        <Route
                            id="address"
                            path="/address"
                            render={props => (
                                <Address {...props} dataManager={dataManager} />
                            )}
                        />
                        {<Route
                            id="initDb"
                            path="/init-db"
                            render={props => (
                                <InitializeDatabase
                                    {...props}
                                    dataManager={dataManager}
                                />
                            )}
                        />}
                    </div>
                </BrowserRouter>
        );
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
//export default App;
