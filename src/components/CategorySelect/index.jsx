import React from 'react';

import { ScrollView } from 'react-native';

import categories from '../../utils/categories';
import Category from '../Category';

import styles from './styles';

export default function CategorySelect({ categorySelected, setCategory, ...rest }) {
    return (
        <ScrollView 
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingRight: 40
        }}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        Icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }
        </ScrollView>
    )
}