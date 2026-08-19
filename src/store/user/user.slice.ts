import type { TUser } from '@/type'
import { createSlice } from '@reduxjs/toolkit'
import { getUserProfile } from './user.actions'

type TApiResponse = {
	isLoading: boolean
	error: unknown | null
	user: TUser | null
}

const initialState: TApiResponse = {
	isLoading: false,
	error: null,
	user: null,
}

// Here is example how to use createAsyncThunk

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		/**
		 * If request is IsLoading / IsPending
		 */

		builder
			.addCase(getUserProfile.pending, state => {
				state.isLoading = true
			})

			/**
			 * If request is Success
			 */

			.addCase(getUserProfile.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload as unknown as TUser
			})

			/**
			 * If request is Failed
			 */

			.addCase(getUserProfile.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload ?? undefined
				state.user = null
			})
	},
})

export const { actions: userActions, reducer: userReducer } = userSlice
