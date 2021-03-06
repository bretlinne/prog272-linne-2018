import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            foo: 'expo try state',
        };
    }

    fetchAddress = () =>{
        console.log('fetchAddress in console');
        this.setState({foo: 'fetchAddress method called'});
    }

    fetchMicro = () => {
        console.log('fetchMicro in console now');
        const that = this;
        //const ip = 'ccalvert.com';
        //const ip = '168.156.46.54';
        const ip = '192.168.1.11';
        fetch('http://' + ip + ':30025/search')
        //fetch('http://' + ip + ':30027/you-rang')
            .then((response) => response.json())
            .then(function (result) {
                console.log(result);
                that.setState({
                    result: result.result
                });
            }).catch(function (ex) {
            that.setState({foo: 'qux error'});
        });
    };

    render() {

        return (
            <View style={styles.container}>
                <Text>Hi Ben!  This is the cool thing I wanted to show</Text>
                <Text>{this.state.foo}</Text>
                <Text>{this.state.result}</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button
                    onPress={this.fetchMicro}
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                onPress={this.fetchAddress}
                title="Get Micro"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff699a',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
