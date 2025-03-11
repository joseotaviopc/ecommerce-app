import { Image } from 'expo-image'
import { Text, View } from 'react-native'

export default function CheckoutScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Checkout Screen - Itens</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Checkout Screen - Endereço</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Checkout Screen - Pagamento</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Checkout Screen - Status</Text>
            <Image
                source={require('../../components/blur-bg.png')}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
            />
        </View>
    )
}
