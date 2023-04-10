import {setInitialState}  from '../redux/candidatesSlice'
import candidates from '../constants/candidatesData'
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

const getCandidates = async (dispatch:Dispatch<AnyAction>) => {
    try {
        // get the data from the API here ...
        dispatch(setInitialState(candidates))
        // pausing the flow for some seconds to sumulate the waiting time while getting the data from the API
        // await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
        throw error
    }
}

export default getCandidates