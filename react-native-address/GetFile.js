import React, { Component } from 'react';
import styles from './styles';
import { Text, View, Button } from 'react-native';

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
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Fetch Address</Text>
                <Text className="App-intro">file: {this.state.file}</Text>
                <View style={styles.buttonView}>
                    <Button
                        onPress={this.getFile}
                        title="Get File"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

export default GetFile;
