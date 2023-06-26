import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import KeyPadButton, { KeyPadButtonStyle } from './KeyPadButton';

interface Props {
  style?: ViewStyle;
  disabled?: boolean;
  onPress: (input: string) => void;
  keyPadButtonStyle?: KeyPadButtonStyle
}
const KeyPadContainer = ({ style, onPress, disabled, keyPadButtonStyle }: Props) => {
  const buttonStyle: ViewStyle = { flex: 1, margin: 8 };
  return (
    <View style={{
      ...style,
      opacity: !disabled ? 1 : 0.7
    }}>
      <View style={{ aspectRatio: 1 }}>
        {Array(3).fill(1).map((_, rowIdx) => (
          <View key={rowIdx} style={{ flex: 1, flexDirection: 'row' }}>
            {Array(3).fill(1).map((_, colIdx) => {
              const text = ((rowIdx * 3) + (colIdx + 1)).toString();
              return (
                <KeyPadButton
                  key={colIdx}
                  style={keyPadButtonStyle}
                  text={text}
                  onPress={() => onPress(text)}
                  disabled={disabled}
                />
              );
            })}
          </View>
        ))}
      </View>
      <View style={{ flex: 0, flexDirection: 'row' }}>
        <View style={buttonStyle} />
        <KeyPadButton
          style={keyPadButtonStyle}
          text='0'
          onPress={() => onPress('0')}
          disabled={disabled}
        />
        <View style={buttonStyle} />
      </View>
    </View>
  );
};
export default KeyPadContainer;