import React from 'react';
import CandidateInterface from "../interfaces/CandidateInterface";
import { useDrag } from 'react-dnd';
import '../theme/LightTheme.scss'
import { ZoneType } from '../types/zoneType';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './styles/DraggableCandidate.scss'
import { expandCandidate } from '../redux/expandedCandidateSlice';
import { useDispatch } from 'react-redux';
import { FaPen } from 'react-icons/fa'

interface ICandidateProps {
	candidate: CandidateInterface,
	zoneType: ZoneType,
	key: number
}

const DraggableCandidate: React.FunctionComponent<ICandidateProps> = (props) => {
	const candidates = useSelector((state: RootState) => state.candidate)
	const dispatch = useDispatch();

	const [{ isDragging }, drag] = useDrag(() => ({
		type: props.candidate.currentZoneGenre,
		item: { candidateData: props.candidate },
		collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
	}), [candidates])

	const expand = () => {
		console.log('expand')
		dispatch(expandCandidate(props.candidate))
	}

	return (
		<div ref={drag} onClick={expand} className={`candidateShadow overflow-hidden w-[150px] h-[200px] bg-white m-[5px] cursor-pointer rounded-xl ${isDragging && 'opacity-40'}`} >
			<div className='w-[150px] h-[150px] flex flex-col justify-end items-center flex' >
				<div className='imageBottomGradient' />
				<h1 className='absolute text-white text-xl m-[0px] !important pb-[3px] whitespace-initial' >{props.candidate.fullName}</h1>
				<img src={require(`../images/${props.candidate.photo ?? 'blank-profile-image.png'}`)} alt={props.candidate.photo ?? 'blank-profile-image.png'} />
			</div>
			<div className='bg-blue-700 h-[50px] w-full rounded-b-xl flex row items-baseline justify-center' >
				<h1 className='relative text-white text-xl top-[12px]' >Evaluate</h1>
				<FaPen className='relative text-white text-base ml-[10px] top-[12px]'/>
			</div>
		</div>
	);
};

export default DraggableCandidate;

// {/* <h2>{props.candidate.id}</h2>
// 				<h1>{props.candidate.fullName}</h1> */}

