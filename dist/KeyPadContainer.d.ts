import * as React from 'react';
import { ViewStyle } from 'react-native';
import { KeyPadButtonStyle } from './KeyPadButton';
interface Props {
    style?: ViewStyle;
    disabled?: boolean;
    onPress: (input: string) => void;
    keyPadButtonStyle?: KeyPadButtonStyle;
}
declare const KeyPadContainer: ({ style, onPress, disabled, keyPadButtonStyle }: Props) => React.JSX.Element;
export default KeyPadContainer;
