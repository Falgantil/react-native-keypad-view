import * as React from 'react';
import { ColorValue, View } from 'react-native';

export interface KeyPadInputStyle {
  size?: number;
  spacing?: number;
  borderColor?: ColorValue;
  borderWidth?: number;
  emptyBackground?: ColorValue;
  filledBackground?: ColorValue;
}

interface Props {
  filled?: boolean;
  style?: KeyPadInputStyle
}

const KeyPadInput = ({ filled, style }: Props) => {
  const size = style?.size ?? 20;
  const backgroundColor = filled ? (style?.filledBackground ?? '#444') : (style?.emptyBackground ?? 'transparent');
  return (
    <View
      style={{
        marginHorizontal: style?.spacing ?? 12,
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: style?.borderColor ?? 'black',
        borderWidth: style?.borderWidth ?? 2,
        backgroundColor: backgroundColor,
      }}
    />
  );
};
export default KeyPadInput;