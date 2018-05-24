import React, {Component} from 'react';
import '../css/App.css';

class AddressShow extends Component{
    constructor(props) {
        super(props);

        this.addressIndex=0;
        this.state = {
            address: AddressList[this.addressIndex]
        };
        this.debug = true;
        if (this.debug) {
            console.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        }
    }

    render() {
        if (this.debug) { console.log("ADDRESS RENDER"); }
        return (
            <div className="App">
                <AddressShow address={this.state.address} />
                <RaisedButton
                    id="setAddress"
                    primary={true}
                    onClick={(event) => this.props.setAddress(1, event)}>
                    Forward
                </RaisedButton>
            </div>

        );
    }

}