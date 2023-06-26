import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Text, View, Animated, TextStyle, ViewStyle } from 'react-native';
import KeyPadContainer from './KeyPadContainer';
import KeyPadInput, { KeyPadInputStyle } from './KeyPadInput';
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
const KeyPadScreen = ({ length = 4, disabled, onSubmit, canDelete, style, text }: Props) => {
  const [code, setCode] = useState<string>('');
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

  const addToCode = async (c: string) => {
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

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 32,
        ...style?.containerStyle
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: '#444',
            fontWeight: '600',
            textAlign: 'center',
            ...style?.textStyle
          }}
        >
          {text}
        </Text>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 24,
            transform: [{ translateX: anim.current }]
          }}
        >
          {Array(length).fill(1).map((_, idx) => (
            <KeyPadInput
              key={idx}
              filled={code.length > idx}
              style={style?.keyPadInputStyle}
            />
          ))}
        </Animated.View>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
        }}
      >
        <KeyPadContainer
          style={{
            paddingHorizontal: 36
          }}
          onPress={addToCode}
          disabled={disabled}
          keyPadButtonStyle={style?.keyPadButtonStyle}
        />
      </View>
    </View>
  );
};
export default KeyPadScreen;