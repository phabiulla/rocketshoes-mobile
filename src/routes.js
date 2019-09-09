import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home,
            Cart,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            //initialRouteName: 'Cart',
            defaultNavigationOptions: navigation => ({
                header: <Header {...navigation} />,
            }),
            cardStyle: {
                backgroundColor: '#191920',
            },
        },
    ),
);

export default Routes;
