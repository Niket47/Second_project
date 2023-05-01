import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [usernumber, setUserNumber] = useState();

  const [gameisover, setGameisOver] = useState(true);

  const pickedNumberhandler = pickednumber => {
    setUserNumber(pickednumber);
    setGameisOver(false);
  };

  const GameOverHandler = () => {
    setGameisOver(true);
  };

  let screen = <StartGameScreen onPicked={pickedNumberhandler} />;

  if (usernumber) {
    screen = (
      <GameScreen usernumber={usernumber} onGameOver={GameOverHandler} />
    );
  }

  if (gameisover && usernumber) {
    screen = <GameOverScreen />;
  }

  return (
    <>
      <View style={styles.mainscreen}>
        <ImageBackground
          source={require('./assets/dice.png')}
          resizeMode="cover"
          style={styles.mainscreen}
          imageStyle={styles.bgimage}>
          <SafeAreaView style={styles.mainscreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: '#525100',
  },
  bgimage: {
    opacity: 0.15,
  },
});

export default App;
