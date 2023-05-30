import React from 'react';
import Animacion7 from './components/Animacion7';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 50,
  },
});

export default App;
