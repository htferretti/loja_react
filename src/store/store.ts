import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../slices/ProductSlice'
import usersReducer from '../slices/UserSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        users: usersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store