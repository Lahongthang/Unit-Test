import {createSlice, createEntityAdapter, createAsyncThunk} from '@reduxjs/toolkit'

export const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json'
}

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
    status: 'idle',
    meta: {},
    message: ''
})

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async ({}, {rejectWithValue, fulfillWithValue}) => {
        const url = 'http://localhost:8000/api/todos'
        const response = await fetch(url, {header: headers})
        if (!response.ok) {
            return
        }
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    }
})

export default todosSlice.reducer