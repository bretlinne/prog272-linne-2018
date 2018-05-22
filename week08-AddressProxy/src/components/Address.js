import React, {Component} from 'react';
import '../css/App.css';
import AddressShow from './AddressShow';
import '../App.css';
import tempAddressList from '../address-list';

class Address extends Component {
    constructor(props) {
        super();
        this.debug = false;
        this.addressIndex = 0;
        this.addressList = null;
        this.state = {
            address: tempAddressList[this.addressIndex]
        };
        this.getAddressList();
        this.log('Temp Address List:', tempAddressList);
        this.GetAddress();
    }

    log(message, message2 = '',message3 = ''){
        if(typeof message2 === 'object') {
            message2 = JSON.stringify(message2, null, 4);
        }
        if(this.debug) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    GetAddress = () => {
        fetch('/address-list')
            .then(response => response.json())
            .then(addressListFromServer =>{
                console.log(AddressListFromServer);
                this.addressList = AddressListFromServer;
            })
            .catch(ex => {
                console.log(ex);
            });
    };
}

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    setAddress = (offset) => {
        if (this.debug) {
            console.log('setAddress called.');
        }
        this.addressIndex += offset;
        this.setState({
            address: setAddress[this.addressIndex]
        });
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
