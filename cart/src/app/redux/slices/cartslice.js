import { createSlice } from '@reduxjs/toolkit'
import { cookies } from 'next/headers'
import { cookies } from 'next/headers'


const initialState = Cookies.get('cart')
? { ...JSON.parse(Cookies.get('cart')), loading: true, showSidebar: false }
: {
loading: true,
showSidebar: false,
cartItems: [],
}
const addDecimals = (num)=>{
    return (Math.round(num * 100) / 100).tofixed(2)
}
const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    addToCart: (state, action) => {
        const item = action.payload
        const existItem = state.cartItems.find((x) => x.id === item.id)
        if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
        x.id === existItem.id ? item: x
    )
    } else {
        state.cartItems = [...state.cartItems, item]
    }
        state.itemsPrice = addDecimals (
        state.cartItems.reduce((acc, item) => acc + item.price* item.qty, 0)
        )
        state.shippingPrice = addDecimals (state.itemsPrice > 100 ? 0 : 100)
        state.taxPrice = addDecimals (
        Number ((0.15 * state. itemsPrice).toFixed(2))
        )
        state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
        )
        cookies.set('cart', json.stringify(state))
        },
removeFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter((x)=> x.id !==action.payload)
    state.itemsPrice = addDecimals (
        state.cartItems.reduce((acc, item) => acc + item.price* item.qty, 0)
        )
        state.shippingPrice = addDecimals (state.itemsPrice > 100 ? 0 : 100)
        state.taxPrice = addDecimals (
        Number ((0.15 * state. itemsPrice).toFixed(2))
        )
        state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
        )
        cookies.set('cart', json.stringify(state))
},
hideloading: (state) => {
    state.loading = false
}
},
})
export const { addToCart, removeFromCart, hideloading } = cartSlice.actions
export default cartslice. reducer