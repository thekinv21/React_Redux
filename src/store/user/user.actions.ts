import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = (userId: number) => {
	return new Promise(resolve =>
		setTimeout(
			() =>
				resolve({
					id: userId,
					fullName: 'Max',
					username: 'tenQuey',
					age: 11,
				}),
			1000,
		),
	)
}

export const getUserById = createAsyncThunk(
	`/users/by-id`,
	async (userId: number, thunkApi) => {
		console.log('userId', userId)

		try {
			const response = await fetchUserById(userId)

			console.log('response', response)
			return response
		} catch (error: unknown) {
			thunkApi.rejectWithValue(error)
		}
	},
)
