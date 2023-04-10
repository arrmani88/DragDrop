import { configureStore } from '@reduxjs/toolkit'
import candidatesReducer from './candidatesSlice'
import expandedCandidateReducer from './expandedCandidateSlice'

export const store = configureStore({
    reducer: {
        candidate: candidatesReducer,
        expandedCandidate: expandedCandidateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch