import * as React from 'react';
import { View } from 'react-native';
import KeyPadButton from './KeyPadButton';
const KeyPadContainer = ({ style, onPress, disabled, keyPadButtonStyle }) => {
    const buttonStyle = { flex: 1, margin: 8 };
    return (React.createElement(View, { style: {
            ...style,
            opacity: !disabled ? 1 : 0.7
        } },
        React.createElement(View, { style: { aspectRatio: 1 } }, Array(3).fill(1).map((_, rowIdx) => (React.createElement(View, { key: rowIdx, style: { flex: 1, flexDirection: 'row' } }, Array(3).fill(1).map((_, colIdx) => {
            const text = ((rowIdx * 3) + (colIdx + 1)).toString();
            return (React.createElement(KeyPadButton, { key: colIdx, style: keyPadButtonStyle, text: text, onPress: () => onPress(text), disabled: disabled }));
        }))))),
        React.createElement(View, { style: { flex: 0, flexDirection: 'row' } },
            React.createElement(View, { style: buttonStyle }),
            React.createElement(KeyPadButton, { style: keyPadButtonStyle, text: '0', onPress: () => onPress('0'), disabled: disabled }),
            React.createElement(View, { style: buttonStyle }))));
};
export default KeyPadContainer;
//# sourceMappingURL=KeyPadContainer.js.map