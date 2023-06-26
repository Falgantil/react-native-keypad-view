import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Color from 'color';
import * as Haptics from 'expo-haptics';
const KeyPadButton = ({ text, style, onPress, disabled }) => {
    const bgColor = Color(style?.backgroundColor ?? '#EEE');
    return (React.createElement(View, { style: {
            flex: 1,
            margin: 8,
            aspectRatio: 1,
            backgroundColor: (bgColor.isDark() ? bgColor.lighten(1) : bgColor.darken(0.2)).hex(),
            borderRadius: 999,
        } },
        React.createElement(TouchableOpacity, { style: {
                flex: 1,
                backgroundColor: style?.backgroundColor ?? '#EEE',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                borderColor: style?.borderColor ?? '#888',
                borderWidth: style?.borderWidth ?? 2,
            }, onPress: () => {
                onPress();
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }, disabled: disabled },
            React.createElement(Text, { style: {
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    color: 'black',
                    fontSize: 26,
                    ...style?.textStyle
                } }, text))));
};
export default KeyPadButton;
//# sourceMappingURL=KeyPadButton.js.map