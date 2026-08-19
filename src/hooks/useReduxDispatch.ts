import { favoriteAction } from '@/store/favorite/favorite.slice'
import * as userActions from '@/store/user/user.actions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const rootActions = {
	...favoriteAction,
	...userActions,
}

export const useReduxDispatch = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
