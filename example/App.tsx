import Color from 'color';
import KeyPadScreen from 'react-native-keypad-view';

export default function App() {
  return (
    <KeyPadScreen
      length={12}
      text='Hand over ye treasured PIN, rapscallion!'
      onSubmit={async () => {
        await new Promise<void>(r => setTimeout(r, 500));
        return false;
      }}
      style={{
        containerStyle: {
          backgroundColor: '#2B2D5B'
        },
        textStyle: {
          color: 'white',
          fontStyle: 'italic',
          fontSize: 18
        },
        keyPadInputStyle: {
          borderColor: 'white',
          borderWidth: 1,
          size: 20,
          spacing: 3,
          filledBackground: Color('#2B2D5B').lighten(2).hex()
        },
        keyPadButtonStyle: {
          backgroundColor: '#2B2D5B',
          borderColor: Color('#2B2D5B').lighten(1).hex(),
          borderWidth: 4,
          textStyle: {
            fontWeight: '900',
            color: 'white',
            transform: [{ rotateZ: '-20deg' }]
          }
        }
      }}
    />
  );
}
