import React, {Children} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const PrimaryButton = ({children, onBtnpress}) => {
  return (
    <View style={styles.outercontainer}>
      <Pressable
        onPress={onBtnpress}
        android_ripple={{color: '#808080'}}
        style={({pressed}) =>
          pressed
            ? [styles.innercontainer, styles.pressed]
            : styles.innercontainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  outercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innercontainer: {
    backgroundColor: '#4e0329',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
