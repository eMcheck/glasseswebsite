import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

export const initData = createSlice({
    name: 'data',
    initialState: {
        store: data
    },
    reducers: {
        changeLanguage: (state, data) => {
            state.store.currentLanguage = data.payload;
            localStorage.setItem('lang', data.payload);
        },
        changeMoney: (state, data) => {
            state.store.currentMoney = data.payload;
            localStorage.setItem('money', data.payload);
        },
        search: (state, data) => {
            state.store.search = data.payload;
            localStorage.setItem('search', data.payload.trim());
        }
    }
});

export const { changeLanguage, changeMoney, search } = initData.actions;
export const selectData = state => state.data.store;
export default initData.reducer;