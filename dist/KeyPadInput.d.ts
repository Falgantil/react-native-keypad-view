import * as React from 'react';
import { ColorValue } from 'react-native';
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
    style?: KeyPadInputStyle;
}
declare const KeyPadInput: ({ filled, style }: Props) => React.JSX.Element;
export default KeyPadInput;
