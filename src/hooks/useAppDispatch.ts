import type { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'

import type { TypedUseSelectorHook } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch
// Use throughout your app instead of plain `useDispatch` 

export default useAppDispatch

