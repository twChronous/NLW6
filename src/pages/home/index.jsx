import React, { useState } from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
} from 'react-native';

import styles from './styles';

import {
  Profile,
  ButtonAdd,
  CategorySelect,
  ListHeader,
  Appointment,
  ListDivider
} from '../../components';

export default function App() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const appointments = [
    {
      id: 1,
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 54:90',
      description: 'é hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: 2,
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 54:90',
      description: 'é hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title='Partidas Agendadas' subtitle='Total 6' />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              guild={item.guild}
              category={item.category}
              description={item.description}
              date={item.date}
            />
          )}
          ItemSeparatorComponent={() => (
            <ListDivider />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}