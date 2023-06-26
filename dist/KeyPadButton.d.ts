import * as React from 'react';
import { ColorValue, TextStyle } from 'react-native';
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
declare const KeyPadButton: ({ text, style, onPress, disabled }: Props) => React.JSX.Element;
export default KeyPadButton;
