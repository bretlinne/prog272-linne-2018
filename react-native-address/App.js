import React from 'react';
import { StyleSheet, View } from 'react-native';
import GetFile from './GetFile';
import { NativeRouter, Route } from 'react-router-native';
import Header from './Header';
import Address from './Address';

// this declaration of styles needs to be above the export
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff699a',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state'
        };
    }
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header />
                    <Route path="/address" component={Address} />
                    <Route path="/get-file" component={GetFile} />
                </View>
            </NativeRouter>
        );
    }
}
