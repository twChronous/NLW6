import React, { createContext, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import {
    REDIRECT_URI,
    SCOPE,
    RESPONSE_TYPE,
    CLIENT_ID,
    CDN_IMAGE,
    api
} from '../config/'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    async function singIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseUrl}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession.startAsync({ authUrl });
            if (type === 'success') {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`
                const { data: userInfo } = await api.get('/users/@me');

                console.log(userInfo)
                const firstName = userInfo.userName.split(' ')[0];

                userInfo.avatar = `${CDN_IMAGE}/avatars/${userInfo.id}/${userInfo.avatar}.png`

                setUser({
                    ...userInfo,
                    firstName,
                    token: params.access_token
                })
                setLoading(false);
            }
        } catch {
            throw new Error('Não foi possivel autenticar');
        }
    }
    return (
        <AuthContext.Provider value={{ user, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}
export {
    AuthProvider,
    useAuth
}