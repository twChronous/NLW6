import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import GuildIcon from '../GuildIcon';
import colors from '../../styles/colors';

export default function Guild({ name, icon, owner, ...rest }) {

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={.7}
            {...rest}
        >

            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.type}>
                        {owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
                <Feather
                    name='chevron-right'
                    size={24}
                    color={colors.heading}
                />
            </View>
        </TouchableOpacity>
    )
}