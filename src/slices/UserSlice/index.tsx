import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
    id: number
    username: string
    password: string
    adm: boolean
}

interface UsersState {
    users: User[]
}

const adm = {
    id: 0,
    username: 'adm',
    password: 'adm',
    adm: true
}

const initialState: UsersState = {
    users: [adm]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload)
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id)
            if (index !== -1) {
                state.users[index] = action.payload
            }
        }, removeUser: (state, action: PayloadAction<number>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        }
    }
})

export const { addUser, updateUser, removeUser, setUsers } = usersSlice.actions

export default usersSlice.reducer