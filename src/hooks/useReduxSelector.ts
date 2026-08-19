import type { RootState } from '@/store'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
