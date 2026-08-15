import { configureStore } from '@reduxjs/toolkit'

export const globalStore = configureStore({
	reducer: {},
})

/**
 * We use this for know what type we have
 * on store
 */

export type RootState = ReturnType<typeof globalStore.getState>

/**
 *
 */

export type AppDispatch = typeof globalStore.dispatch
