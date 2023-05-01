import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constsnts/colors';

const StartGameScreen = ({onPicked}) => {
  const [enterednumber, setEnteredNumber] = useState('');

  const numberInputhandler = enteredtext => {
    setEnteredNumber(enteredtext);
  };

  const resetInputhandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enterednumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('invalid number', 'number 1 to 99 only', [
        {text: 'okey', style: 'destructive', onPress: resetInputhandler},
      ]);
      return;
    }
    onPicked(choosenNumber);
  };

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.InputNumber}
        maxLength={2}
        keyboardType="numeric"
        onChangeText={numberInputhandler}
        value={enterednumber}
      />
      <View style={styles.buttonBox}>
        <View style={styles.buttonView}>
          <PrimaryButton onBtnpress={resetInputhandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton onBtnpress={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    marginHorizontal: 10,
    marginTop: 100,
    padding: 12,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputNumber: {
    height: 60,
    width: 50,
    fontSize: 30,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonBox: {
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
  },
});

export default StartGameScreen;
