import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CandidateInterface from "../interfaces/CandidateInterface";
import { zoneTypes } from "../types/zoneType";

export interface CandidatesState {
	temporary: {
		initial: CandidateInterface[],
		accepted: CandidateInterface[],
		rejected: CandidateInterface[],
	},
	permanent: {
		initial: CandidateInterface[],
		accepted: CandidateInterface[],
		rejected: CandidateInterface[],
	}
	finalList: CandidateInterface[]
}

const initialState: CandidatesState = {
	temporary: {
		initial: [],
		accepted: [],
		rejected: [],
	},
	permanent: {
		initial: [],
		accepted: [],
		rejected: [],
	},
	finalList: []
}

export const cadidatesSlice = createSlice({
	name: 'candidatesSlice',
	initialState: initialState,
	reducers: {

		setInitialState: (state, action: PayloadAction<CandidateInterface[]>) => {
			state.permanent.initial = action.payload
			state.temporary.initial = action.payload
		},
		applyChanges: (state) => {
			state.permanent = state.temporary
			state.finalList = state.temporary.accepted
		},
		revertChanges: (state) => {
			state.temporary = state.permanent
		},
		evaluateCandidate: (state, action) => {
			let indexToUpdate: number = -1
			switch (action.payload.currentZoneType) {
				case zoneTypes.INITIAL_ZONE:
					indexToUpdate = state.temporary.initial.findIndex(candidate => candidate.id === action.payload.id)
					if (indexToUpdate < 0) return
					state.temporary.initial[indexToUpdate] = action.payload
					break ;
				case zoneTypes.ACCEPTED_ZONE:
					indexToUpdate = state.temporary.accepted.findIndex(candidate => candidate.id === action.payload.id)
					if (indexToUpdate < 0) return
					state.temporary.accepted[indexToUpdate] = action.payload
					break ;
				case zoneTypes.REJECTED_ZONE:
					indexToUpdate = state.temporary.rejected.findIndex(candidate => candidate.id === action.payload.id)
					if (indexToUpdate < 0) return
					state.temporary.rejected[indexToUpdate] = action.payload
					break ;
			}
			
		},
		temporaryMoveItemTo: (state, action) => {
			// note that the user can't move the candidates backwards to the initial list,
			// since he must choose whether to accept or to reject them.
			// this mean that the methods (move from rejected to initial) and (from initial to rejected) doesn't exixst
			switch (action.payload.candidateData.currentZoneType) {
// ------------------------------------------------------------------------------------
				case zoneTypes.INITIAL_ZONE: // source is INITIAL_ZONE
					// move from initial to accepted:
					if (action.payload.destination === zoneTypes.ACCEPTED_ZONE) { // destination is ACCEPTED_ZONE
						// get the index of the candidate by id
						const indexToDisplace: number = state.temporary.initial?.findIndex(candidate => candidate.id === action.payload.candidateData.id)!
						// if the spcified id wasn't found
						if (indexToDisplace < 0) return
						// add the candidate to accepted list
						state.temporary.accepted?.push(state.temporary.initial[indexToDisplace])
						// mutate the currentZoneType property
						state.temporary.initial[indexToDisplace].currentZoneType = zoneTypes.ACCEPTED_ZONE
						//remove the candidate from the initial list
						state.temporary.initial.splice(indexToDisplace, 1)
					}
					// move from initial to rejected:
					else if (action.payload.destination === zoneTypes.REJECTED_ZONE) { // destination is REJECTED_ZONE
						const indexToDisplace: number = state.temporary.initial.findIndex(candidate => candidate.id === action.payload.candidateData.id)!
						if (indexToDisplace < 0) return
						state.temporary.rejected.push(state.temporary.initial[indexToDisplace])
						state.temporary.initial[indexToDisplace].currentZoneType = zoneTypes.REJECTED_ZONE
						state.temporary.initial.splice(indexToDisplace, 1)
					}
					break;
// ------------------------------------------------------------------------------------
				case zoneTypes.REJECTED_ZONE: // source is REJECTED_ZONE
					// move from rejected to accepted:
					if (action.payload.destination === zoneTypes.ACCEPTED_ZONE) { // destination is ACCEPTED_ZONE
						const indexToDisplace: number = state.temporary.rejected?.findIndex(candidate => candidate.id === action.payload.candidateData.id)!
						if (indexToDisplace < 0) return
						state.temporary.accepted.push(state.temporary.rejected[indexToDisplace])
						state.temporary.rejected[indexToDisplace].currentZoneType = zoneTypes.ACCEPTED_ZONE
						state.temporary.rejected.splice(indexToDisplace, 1)
					}
					break;
// ------------------------------------------------------------------------------------
				case zoneTypes.ACCEPTED_ZONE: // source is ACCEPTED_ZONE
					// move from accepted to rejected:
					if (action.payload.destination === zoneTypes.REJECTED_ZONE) { // destination is REJECTED_ZONE
						const indexToDisplace: number = state.temporary.accepted?.findIndex(candidate => candidate.id === action.payload.candidateData.id)
						if (indexToDisplace < 0) return
						state.temporary.rejected.push(state.temporary.accepted[indexToDisplace])
						state.temporary.accepted[indexToDisplace].currentZoneType = zoneTypes.REJECTED_ZONE
						state.temporary.accepted.splice(indexToDisplace, 1)
					}
			}
		}
	}
})

export const { setInitialState,
	temporaryMoveItemTo,
	applyChanges,
	revertChanges,
	evaluateCandidate } = cadidatesSlice.actions

export default cadidatesSlice.reducer