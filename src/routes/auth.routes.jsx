import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, SingIn, AppointmentDetails, AppointmentCreate } from '../pages';
import colors from '../styles/colors';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: colors.secondary100
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
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}