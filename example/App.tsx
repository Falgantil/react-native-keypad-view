import KeyPadScreen from 'react-native-keypad-view';

export default function App() {
  return (
    <KeyPadScreen
      text='Enter PIN'
      onSubmit={async () => {
        await new Promise<void>(r => setTimeout(r, 500));
        return false;
      }}
    />
  );
}
