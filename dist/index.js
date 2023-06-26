import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Text, View, Animated } from 'react-native';
import KeyPadContainer from './KeyPadContainer';
import KeyPadInput from './KeyPadInput';
const KeyPadScreen = ({ length = 4, disabled, onSubmit, style, text }) => {
    const [code, setCode] = useState('');
    const anim = useRef(new Animated.Value(0));
    const shake = useCallback(() => {
        // runs the animation array in sequence
        Animated.sequence([
            // shift element to the left by 2 units
            Animated.timing(anim.current, {
                toValue: -20,
                duration: 80,
                useNativeDriver: true,
            }),
            // shift element to the right by 2 units
            Animated.timing(anim.current, {
                toValue: 20,
                duration: 50,
                useNativeDriver: true,
            }),
            // shift element to the left by 2 units
            Animated.timing(anim.current, {
                toValue: -20,
                duration: 50,
                useNativeDriver: true,
            }),
            // shift element to the right by 2 units
            Animated.timing(anim.current, {
                toValue: 20,
                duration: 50,
                useNativeDriver: true,
            }),
            // shift element to the left by 2 units
            Animated.timing(anim.current, {
                toValue: -10,
                duration: 50,
                useNativeDriver: true,
            }),
            // shift element to the right by 2 units
            Animated.timing(anim.current, {
                toValue: 10,
                duration: 50,
                useNativeDriver: true,
            }),
            // bring the element back to its original position
            Animated.timing(anim.current, {
                toValue: 0,
                duration: 80,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);
    const addToCode = async (c) => {
        const newCode = code + c;
        setCode(newCode);
        if (newCode.length < length) {
            return;
        }
        const success = await onSubmit(newCode);
        if (!success) {
            setCode('');
            shake();
        }
    };
    return (React.createElement(View, { style: {
            flex: 1,
            paddingVertical: 32,
            ...style?.containerStyle
        } },
        React.createElement(View, { style: {
                flex: 1,
                justifyContent: 'center',
            } },
            React.createElement(Text, { style: {
                    fontSize: 26,
                    color: '#444',
                    fontWeight: '600',
                    textAlign: 'center',
                    ...style?.textStyle
                } }, text),
            React.createElement(Animated.View, { style: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 24,
                    transform: [{ translateX: anim.current }]
                } }, Array(length).fill(1).map((_, idx) => (React.createElement(KeyPadInput, { key: idx, filled: code.length > idx, style: style?.keyPadInputStyle }))))),
        React.createElement(View, { style: {
                flex: 3,
                justifyContent: 'center',
            } },
            React.createElement(KeyPadContainer, { style: {
                    paddingHorizontal: 36
                }, onPress: addToCode, disabled: disabled, keyPadButtonStyle: style?.keyPadButtonStyle }))));
};
export default KeyPadScreen;
//# sourceMappingURL=index.js.map