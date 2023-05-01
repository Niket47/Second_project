import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleTexts = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#000',
    padding: 12,
  },
});

export default TitleTexts;
