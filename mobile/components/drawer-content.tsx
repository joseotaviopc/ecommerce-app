import CatalogInactiveIcon from '@/components/icons/catalog-inactive-icon'
import Colors from '@/constants/Colors'
import type { RootStackParamList } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { NavigationProp } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export function DrawerContent() {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    async function handleLogout() {
        await AsyncStorage.removeItem('isLoggedIn')
        setTimeout(() => {
            navigation.navigate('(tabs)', {
                screen: 'login',
            })
        }, 500)
    }
    return (
        <SafeAreaView
            style={[
                drawerStyles.box,
                { paddingTop: Platform.OS === 'ios' ? top * 0.5 : 1.5 * top },
            ]}
        >
            <Text style={[drawerStyles.sectionTitle]}>test flows</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'index',
                    })
                }}
            >
                <CatalogInactiveIcon color={Colors.darker} />
                <View style={[drawerStyles.separator, { marginTop: 12 }]} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'cart',
                    })
                }}
            >
                <Text style={drawerStyles.title}>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'checkout',
                    })
                }}
            >
                <Text style={drawerStyles.title}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'login',
                    })
                }}
            >
                <Text style={drawerStyles.title}>Login</Text>
            </TouchableOpacity>
            <Text style={drawerStyles.sectionTitle}>actions</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
                <Text style={drawerStyles.title}>Log Out</Text>
            </TouchableOpacity>
            <Text style={drawerStyles.title}>Reset App State</Text>
            <Text style={drawerStyles.sectionTitle}>other</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'report',
                    })
                }}
            >
                <Text style={drawerStyles.title}>Report a Bug</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    navigation.navigate('(tabs)', {
                        screen: 'about',
                    })
                }}
            >
                <Text style={drawerStyles.title}>About</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const drawerStyles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 12,
        gap: 6,
    },
    title: {
        fontFamily: 'NotoSans_400',
        fontSize: 20,
        lineHeight: 32,
        letterSpacing: 1.25,
        color: Colors.darker,
        borderBottomWidth: 1,
        borderBottomColor: Colors.light,
        paddingBottom: 12,
    },
    sectionTitle: {
        fontFamily: 'NotoSans_400',
        fontSize: 14,
        lineHeight: 32,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: Colors.dark,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.light,
    },
})
