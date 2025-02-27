import colors from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TextProps, TouchableOpacity, ViewProps } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: () => void;
    variant?: 'gradient' | 'outline' | 'outlineColor' | 'danger';
};

export default function Button({ title, onPress, variant = 'gradient' }: ButtonProps) {
    const buttonVariants: Record<string, ViewProps['style']> = {
        outline: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.darker,
        },
        outlineColor: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.green,
        },
        danger: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.red,
        },
    }
    const textVariants: Record<string, TextProps['style']> = {
        danger: {
            color: colors.red,
        },
    }

    if (variant === 'gradient') {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ width: '100%' }}>
                <LinearGradient
                    colors={[colors.gradientFrom, colors.gradientTo]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={[styles.button]}>
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonVariants[variant]]} activeOpacity={0.7}>
            <Text style={[styles.text, textVariants[variant]]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 32,
        borderRadius: 36,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: colors.darker,
        fontSize: 16,
        fontFamily: 'NotoSans_600',
        lineHeight: 20,
    },
});
