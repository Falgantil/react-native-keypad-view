import * as React from 'react';
import { View, TouchableOpacity, Text, ColorValue, TextStyle } from 'react-native';
import Color from 'color';
import * as Haptics from 'expo-haptics';

export interface KeyPadButtonStyle {
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
  textStyle?: TextStyle;
}

interface Props {
  style?: KeyPadButtonStyle;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const KeyPadButton = ({ text, style, onPress, disabled }: Props) => {
  const bgColor = Color(style?.backgroundColor ?? '#EEE');
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
        aspectRatio: 1,
        backgroundColor: (bgColor.isDark() ? bgColor.lighten(1) : bgColor.darken(0.2)).hex(),
        borderRadius: 999,
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: style?.backgroundColor ?? '#EEE',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 999,
          borderColor: style?.borderColor ?? '#888',
          borderWidth: style?.borderWidth ?? 2,
        }}
        onPress={() => {
          onPress();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        disabled={disabled}
      >
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'black',
            fontSize: 26,
            ...style?.textStyle
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default KeyPadButton;