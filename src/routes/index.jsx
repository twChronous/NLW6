import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { SingIn } from '../pages';

export default function Routes() {
    const {user} = useAuth();
    return (
        <NavigationContainer>
            {user.id ?  <AuthRoutes /> : <SingIn/>}
        </NavigationContainer>
    )
}