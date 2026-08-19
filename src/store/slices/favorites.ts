import type { TProduct } from '@/type'
import { createSlice } from '@reduxjs/toolkit'

export const initialState: TProduct[] = [
	{
		id: 1,
		title: 'iPhone 15',
		description: 'Apple smartphone with 128GB storage',
		price: 799,
		currency: 'USD',
	},
	{
		id: 2,
		title: 'MacBook Air M2',
		description: '13-inch laptop with Apple M2 chip',
		price: 999,
		currency: 'USD',
	},
	{
		id: 3,
		title: 'AirPods Pro',
		description: 'Wireless earbuds with active noise cancellation',
		price: 249,
		currency: 'USD',
	},
	{
		id: 4,
		title: 'Samsung Galaxy S24',
		description: 'Android smartphone with 256GB storage',
		price: 899,
		currency: 'USD',
	},
	{
		id: 5,
		title: 'Sony WH-1000XM5',
		description: 'Wireless headphones with noise cancellation',
		price: 399,
		currency: 'USD',
	},
]

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, { payload: product }) => {
			const isExist: boolean = state?.some((p: TProduct) => p.id === product.id)

			if (isExist) {
				const index: number = state?.findIndex(
					(p: TProduct) => p.id === product.id,
				)

				if (index !== -1) {
					state.splice(index, 1)
				}
			} else {
				state.push(product)
			}
		},
	},
})

export const { actions: favoriteAction, reducer: favoriteReducer } =
	favoriteSlice
