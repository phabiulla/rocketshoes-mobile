import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';
import logo from './assets/images/logo.svg';

export default class App extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#191920" />
                <Routes />
            </>
        );
    }
}
