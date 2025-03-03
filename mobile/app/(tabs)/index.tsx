import Button from '@/components/button'
import Card from '@/components/card'
import colors from '@/constants/Colors'
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabOneScreen() {
    const { top, bottom } = useSafeAreaInsets()
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            style={[{ backgroundColor: colors.white, flex: 1 }]}
            contentContainerStyle={[
                {
                    flexGrow: 1,
                    paddingTop: top,
                    paddingBottom: bottom * 2,
                },
            ]}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    flex: 1,
                    paddingBottom: Platform.OS === 'android' ? bottom * 4 : 0,
                }}
            >
                <Card title="Swag Labs Backpack" price={20} starts={4} onPress={() => {}} />
                <Card
                    variant="horizontal"
                    title="Swag Labs Backpack"
                    price={20}
                    starts={4}
                    onPress={() => {}}
                />
                <Card title="Swag Labs Backpack" price={20} starts={4} onPress={() => {}} />
                <Card
                    variant="horizontal"
                    title="Swag Labs Backpack"
                    price={20}
                    starts={4}
                    onPress={() => {}}
                />
                <Card title="Swag Labs Backpack" price={20} starts={4} onPress={() => {}} />
                <Card
                    variant="horizontal"
                    title="Swag Labs Backpack"
                    price={20}
                    starts={4}
                    onPress={() => {}}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
