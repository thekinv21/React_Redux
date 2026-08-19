import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchProfile = async () => {
	try {
		const res = await fetch('http://localhost:8080/profile')

		if (!res.ok) {
			console.log('Failed to fetch user profile')
		}

		const data = await res.json()

		return data
	} catch (error) {
		console.log('Error to fetch user profile', error)
	}
}

export const getUserProfile = createAsyncThunk(
	'/profile',
	async (_, thunkApi) => {
		try {
			const response = await fetchProfile()

			return response
		} catch (error: unknown) {
			return thunkApi.rejectWithValue(error)
		}
	},
)
