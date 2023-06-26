import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { KeyPadInputStyle } from './KeyPadInput';
import { KeyPadButtonStyle } from './KeyPadButton';
export interface KeyPadScreenStyle {
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    keyPadInputStyle?: KeyPadInputStyle;
    keyPadButtonStyle?: KeyPadButtonStyle;
}
interface Props {
    length?: number;
    disabled?: boolean;
    onSubmit: (code: string) => Promise<boolean>;
    canDelete?: boolean;
    style?: KeyPadScreenStyle;
    text: string;
}
declare const KeyPadScreen: ({ length, disabled, onSubmit, canDelete, style, text }: Props) => React.JSX.Element;
export default KeyPadScreen;
