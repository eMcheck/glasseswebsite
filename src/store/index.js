import { configureStore } from '@reduxjs/toolkit';
import initData from './initData';
import cartGoods from './cartGoods'

export default configureStore({
    reducer: {
        data: initData,
        cart: cartGoods
    },
});