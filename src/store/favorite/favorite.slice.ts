import type { TProduct } from '@/type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const initialState: TProduct[] = []

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<TProduct>) => {
			const isExist: boolean = state?.some(
				(p: TProduct) => p.id === action.payload.id,
			)

			if (isExist) {
				const index: number = state?.findIndex(
					(p: TProduct) => p.id === action.payload.id,
				)

				if (index !== -1) {
					state.splice(index, 1)
				}
			} else state.push(action.payload)
		},
	},
})

export const { actions: favoriteAction, reducer: favoriteReducer } =
	favoriteSlice
