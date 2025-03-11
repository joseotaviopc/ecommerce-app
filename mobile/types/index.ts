import type { OutputProductDto } from '@/orval/model'

export type RootStackParamList = {
    '(tabs)': {
        screen: 'index' | 'cart' | 'login' | 'about' | 'report' | 'checkout'
    }
    product: undefined | { product: OutputProductDto }
    '+not-found': undefined
}
