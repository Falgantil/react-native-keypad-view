import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import KeyPadScreen from './react-native-keypad-view/KeyPadScreen';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(false);
  const submit = async (code: string): Promise<boolean> => {
    setLoading(true);
    await new Promise<void>(r => setTimeout(r, 500));
    setLoading(false);
    return false;
  };
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2B2D5B',
    }}>
      <KeyPadScreen
        length={4}
        onSubmit={submit}
        text='Enter your PIN number'
        disabled={loading}
        style={{
          textStyle: {
            fontSize: 26,
            color: 'white'
          },
          keyPadInputStyle: {
            borderColor: 'white',
            borderWidth: 2,
            size: 20,
            filledBackground: '#7A81FF',
            emptyBackground: 'transparent',
          },
          keyPadButtonStyle: {
            backgroundColor: '#2B2D5B',
            borderColor: '#CCC',
            borderWidth: 2,
            textStyle: {
              color: 'white'
            }
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
