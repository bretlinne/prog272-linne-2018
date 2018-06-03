import React, {Component} from 'react';
import '../css/App.css';
import AddressShow from './AddressShow';
import '../App.css';
import addressList from '../address-list';

class App extends Component {

    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            address: address
        };

    }

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    setAddress = () => {
        const address = this.props.addressList[1];
        this.addressIndex = 1;
        this.setState({
            address: setAddress[this.addressIndex]

        })
    };

    render() {
        return (
            //<div className="App">
            <div>
                <AddressShow
                    address={this.state.address}
                    setAddress={this.setAddress}
                />

            </div>
        );
    }
}

export default App;
