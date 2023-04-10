import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CandidateInterface from "../interfaces/CandidateInterface";

export interface ExpandedCandidateState {
    candidate: CandidateInterface | null
}

const initialState: ExpandedCandidateState = {
    candidate: null
}

export const expandedCandidateSlice = createSlice({
    name: 'expandedCandidateSlice',
    initialState: initialState,
    reducers: {
        expandCandidate: (state, action: PayloadAction<CandidateInterface>) => {
            state.candidate = action.payload
        },
        collapseCandidate: (state) => {
            state.candidate = null
        }
    }
})

export const {
    expandCandidate,
    collapseCandidate } = expandedCandidateSlice.actions

export default expandedCandidateSlice.reducer