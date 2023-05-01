import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import TitleTexts from '../components/TitleTexts';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

const generatrandombetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generatrandombetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundry = 1;
let maxBoundry = 100;

const GameScreen = ({usernumber, onGameOver}) => {
  const initionalguess = generatrandombetween(1, 100, usernumber);
  const [currentguess, setCurrentGuess] = useState(initionalguess);

  useEffect(() => {
    if (currentguess == usernumber) {
      onGameOver();
    }
  }, [currentguess, usernumber, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentguess < usernumber) ||
      (direction === 'grater' && currentguess > usernumber)
    ) {
      Alert.alert('dont lie', 'this is wrong'[{text: 'ok', style: 'cancel'}]);
      return;
    }

    if (direction === 'lower') {
      maxBoundry = currentguess;
    } else {
      minBoundry = currentguess + 1;
    }
    const newrndmNumber = generatrandombetween(
      minBoundry,
      maxBoundry,
      currentguess,
    );
    setCurrentGuess(newrndmNumber);
  };

  return (
    <View style={styles.screen}>
      <View>
        <TitleTexts style={styles.title}>opponents guest</TitleTexts>
        <NumberContainer>{currentguess}</NumberContainer>
      </View>
      <View>
        <Text>text higher or lower</Text>
        <View>
          <PrimaryButton onBtnpress={nextGuessHandler(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onBtnpress={nextGuessHandler(this, 'grater')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;
