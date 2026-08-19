import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { favoriteReducer } from './favorite/favorite.slice'
import { userReducer } from './user/user.slice'

const reducers = combineReducers({
	favorites: favoriteReducer,
	user: userReducer,
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
