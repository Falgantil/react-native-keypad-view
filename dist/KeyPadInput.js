import * as React from 'react';
import { View } from 'react-native';
const KeyPadInput = ({ filled, style }) => {
    const size = style?.size ?? 20;
    const backgroundColor = filled ? (style?.filledBackground ?? '#444') : (style?.emptyBackground ?? 'transparent');
    return (React.createElement(View, { style: {
            marginHorizontal: style?.spacing ?? 12,
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: style?.borderColor ?? 'black',
            borderWidth: style?.borderWidth ?? 2,
            backgroundColor: backgroundColor,
        } }));
};
export default KeyPadInput;
//# sourceMappingURL=KeyPadInput.js.map