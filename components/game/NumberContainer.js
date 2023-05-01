import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#000',
    padding: 25,
    borderRadius: 2,
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
});

export default NumberContainer;
