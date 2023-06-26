# react-native-keypad-view

A style-able numpad input view for authentication, 2FA, or whatever other numerical secret input your heart desires
![IMG_0016](https://github.com/Falgantil/react-native-keypad-view/assets/6367512/44baa355-304e-4cdf-b1fa-8e6705af9aa5)
![IMG_0017](https://github.com/Falgantil/react-native-keypad-view/assets/6367512/907072cb-c5af-4765-88e4-71896d9dc95d)


## Usage

### Default layout:
```tsx
<KeyPadScreen
  length={4}
  text='Enter PIN'
  onSubmit={async () => {
    // Perform authentication
    await new Promise<void>(r => setTimeout(r, 500));
    return false;
  }}
/>
```

### Blue-styled layout:
```tsx
<KeyPadScreen
  length={12}
  text='Hand over ye treasured PIN, rapscallion!'
  onSubmit={async () => {
    // Perform authentication
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
```
