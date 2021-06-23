import React from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

import styles from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
             jogatinas {'\n'}
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
          </Text>
          <ButtonIcon title='Entre com discord' onPress={handleSingIn} />
      </View>
    </View>
  );
}

