import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, SingIn } from '../pages';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }}
        >
            <Screen
                name="SingIn"
                component={SingIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}