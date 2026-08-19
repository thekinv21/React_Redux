import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoriteReducer } from './slices/favorites'

const reducers = combineReducers({
	favorites: favoriteReducer,
})

export const globalStore = configureStore({
	reducer: reducers,
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
