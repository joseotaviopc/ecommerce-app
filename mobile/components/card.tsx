import colors from '@/constants/Colors';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import StartIcon from './start-icon';
import RemoveCircleIcon from './remove-circle-icon';
import AddCircleIcon from './add-circle-icon';
import { faker } from '@faker-js/faker';

type CardProps = {
    title: string;
    price: number;
    starts: number;
    productColors?: string[];
    onPress: () => void;
    variant?: 'horizontal' | 'vertical';
};

const MAX_STAR = 5;

export default function Card({ price, starts, title, productColors = [colors.red, colors.darkBlue, colors.lightBlue], onPress, variant = 'vertical' }: CardProps) {
    const cardVariants: Record<string, ViewProps['style']> = {
        horizontal: {
            width: '100%',
            height: 240,
            flexDirection: 'row'
        },
        vertical: {
            width: 170,
            height: 314,
        },
    }
    const isHorizontal = variant === 'horizontal';
    const IMAGE = faker.image.url()

    if (isHorizontal) {
        return (
            <View style={[styles.card, cardVariants[variant]]}>
                <Image source={{uri: IMAGE}} width={460} height={460} style={styles.imageHorizontal} />
                <View style={styles.boxInfo}>
                    <View style={styles.boxInfoHorizontal}>
                        <Text style={[styles.title]}>{title}</Text>
                        <View style={styles.starts}>
                            {Array.from(Array(starts), (_, i) => <StartIcon key={i} color='' />)}
                            {Array.from(Array(MAX_STAR - starts), (_, i) => <StartIcon key={i} color={colors.light} />)}
                        </View>
                    </View>
                    <View style={styles.boxColor}>
                        <Text style={[styles.textColor]}>Cor:</Text>
                        {
                            productColors && Array.from(productColors, color => <View key={color} style={[styles.colorCircle, { backgroundColor: color }]} />)
                        }
                    </View>
                    <Text style={[styles.price]}>R${price}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => console.log('menos')} activeOpacity={0.7}>
                            <RemoveCircleIcon />
                        </TouchableOpacity>
                        <Text style={[styles.title]}>{price}</Text>
                        <TouchableOpacity onPress={() => console.log('mais')} activeOpacity={0.7}>
                            <AddCircleIcon />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('remover')} activeOpacity={0.7}>
                            <Text style={[styles.title, {color: colors.red}]}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    };


    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, cardVariants[variant]]} activeOpacity={0.7}>
            <Image source={{uri: IMAGE}} width={200} height={200} style={styles.image} />
            <View style={styles.boxInfo}>
                <Text style={[styles.title]}>{title}</Text>
                <Text style={[styles.price]}>R${price}</Text>
                <View style={styles.starts}>
                    {Array.from(Array(starts), (_, i) => <StartIcon key={i} color='' />)}
                    {Array.from(Array(MAX_STAR - starts), (_, i) => <StartIcon key={i} color={colors.light} />)}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderColor: colors.light,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    image: {
        width: 170,
        height: 170,
        objectFit: 'cover',
    },
    imageHorizontal: {
        width: 170,
        height: 314,
        objectFit: 'cover',
        alignSelf: 'center',
    },
    boxInfo: {
        flex: 1,
        width: '100%',
        gap: 10,
        padding: 16,
    },
    boxInfoHorizontal: {
        width: '100%',
        gap: 8,
    },
    title: {
        color: colors.darker,
        fontSize: 16,
        fontFamily: 'NotoSans_600',
        lineHeight: 20,
    },
    price: {
        color: colors.darker,
        fontSize: 20,
        fontFamily: 'NotoSans_700',
        lineHeight: 32,
    },
    boxColor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    textColor: {
        color: colors.darker,
        fontSize: 16,
        fontFamily: 'NotoSans_400',
        lineHeight: 28,
    },
    colorCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    starts: {
        flexDirection: 'row',
        gap: 4
    }
});
