import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
    id: number
    name: string
    price: number
}

interface ProductsState {
    products: Product[]
}

const example = {
    id: 0,
    name: 'Exemplo de produto',
    price: 9.9
}

const initialState: ProductsState = {
    products: [example]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.products[index] = action.payload
            }
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    }
})

export const { addProduct, removeProduct, updateProduct, setProducts } = productsSlice.actions

export default productsSlice.reducer