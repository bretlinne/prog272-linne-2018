import React, { Component } from 'react';
import '../App.css';
import '../address-list';
import AddressShow from './AddressShow';
import tempAddressList from '../address-list';

class Address extends Component {
    constructor() {
        super();
        this.debug = false;
        this.canceled = false;
        // this key's vlaue is assigned to be the whole set of address fields
        // in the address-list.js file, according to the index sent. Index 0
        // is all values are unknown.  index 1 is Curly Howard.  I think it's
        // still useful to have the static data in here for unknown data as the
        // initialization point.
        this.state = {
            addressIndex: 0,
            addressList: [{}],
            address: tempAddressList[0]
        };

    }
    componentDidMount() {
        this.getAddressList();
    }

    componentWillUnmount() {
        this.canceled = true;
    }


    setAddress = (offset) => {

        this.addressIndex += offset;
        //this.addressIndex = (addressIndex <= 0) ? addresses.length - 1 : addressIndex - 1;
        this.setState({
            address: tempAddressList[this.addressIndex]
        });
    };

    getAddressList = () =>{
        fetch('/address-list')
            .then(function(res) {
                return res.json();
            })
            .then(function(json) {
                console.log('fetched Congress info: ', json);
                const addressListFromServer = json;
                // console.log's don't seem to print to the console while a React
                // app is running.
                // console.log(addressListFromServer);
                if (!this.canceled) {
                    this.setState({addressList: addressListFromServer});
                    this.setState({index: 0});
                }
                
            })
            .catch(function(ex) {
                console.log('something went wrong', ex);
            });
    }
    render() {
        return (
            <div className="App" id="Address">
                <h1 className="App-title">Address Info</h1>
                <AddressShow
                    address={this.state.address}
                    fetchAddress={this.getAddressList}
                    setAddress={this.setAddress}
                />
            </div>
        );
    }
}
/*
* order of events in original address Maven (setAddress from local data version)
* 1) press button: fetch Address.  Button defined in AddressShow:render method
* 2) AddressShow:render method's button has onClick set to call this.props.setAddress}
* 3) setAddress is a prop sent in to addressShow by the Address.js component.  So
* the method for setAddress is defined there.  SetAddress set's the index to 1 to
* call the second set of values for the addressList, and then calls the setState()
* method--which I believe is a React built-in method--which sets the state of the
* address prop to contain a set of addressList data.
* 4) in addressShow, the data is printed out by referencing the prop address, which
* was just set in step 3.  It's referenced like so: "this.props.address.<field>"
*/
/*
* For getting the addresses from Congress Server
* -----------------------------------------------
* 1) press button Fetch Addresses.  button defined in AddressShow
* 2) AddressShow: render method's button has onClick set to call getAddressList()
* 3) getAddressList could be defined in Address.js like the setAddress was.  Therefore
* onClick=this.props.fetchAddress.  I had to set a definition in AddressShow.PropTypes
* so that a prop of fetchAddress would register as something that holds a pointer to
* a function being passed in.
* 4) it looks like the address prop is re-usable for the congress server.  I just
* need to re-assign the data fetched from the server to the address prop.
* 5) looks like the data coming from CongressServer is just a pile of JSON data,
* not an array.  On second look, the address-list.json file in the CongressServer
* project starts off with open square bracket [ followed by {...}, {...}, etc ].
* This COULD be an array.  I can try indexing the data like an array and see if it works.
* 6)
 */

export default Address;
