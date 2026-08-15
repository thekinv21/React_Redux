import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { globalStore } from '../store'

type TReduxProvider = {
	children: ReactNode
}

export function ReduxProvider({ children }: TReduxProvider) {
	return <Provider store={globalStore}>{children}</Provider>
}
