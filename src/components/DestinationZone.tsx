import React, { useEffect } from "react";
import { ZoneType, zoneTypes } from "../types/zoneType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DraggableCandidate from "./DraggableCandidate";
import { useDrop } from "react-dnd";
import { zoneGenres } from "../types/zoneGenre";
import { useDispatch } from "react-redux";
import { temporaryMoveItemTo } from "../redux/candidatesSlice";
import '../theme/LightTheme.scss'

interface IDestinationZoneProps {
	zoneType: ZoneType,
}

const DestinationZone: React.FunctionComponent<IDestinationZoneProps> = (props) => {
	const getColor = (): string => props.zoneType === zoneTypes.ACCEPTED_ZONE ? 'greenShadow' : 'redShadow'
	const candidates = useSelector((state: RootState) => state.candidate)
	const dispatch = useDispatch()
	const [,drop] = useDrop(() => ({
		accept: [zoneGenres.SOURCE, zoneGenres.DESTINATION],
		drop: (item: any) => {
			dispatch(temporaryMoveItemTo({
				candidateData: item.candidateData,
				destination: props.zoneType
			}))
		}
	}), [candidates])

	return (
		<div ref={drop} className={`zoneShadow widthResponsive min-h-[35vh] m-[20px] rounded-xl ${getColor()} p-[35px] flex flex-col items-center justify-start `}>
			<h1 className="pb-[10px] text-3xl">{`Drop ${props.zoneType === zoneTypes.ACCEPTED_ZONE?'accepted' : 'rejected'} candidates here...`}</h1>
			<div className="flex row flex-wrap justify-center" >
				{props.zoneType === zoneTypes.ACCEPTED_ZONE &&
					candidates.temporary.accepted.map((candidate, index) => (
						<DraggableCandidate candidate={candidate} key={index} zoneType={props.zoneType} />
					))}
				{props.zoneType === zoneTypes.REJECTED_ZONE &&
					candidates.temporary.rejected.map((candidate, index) => (
						<DraggableCandidate candidate={candidate} key={index} zoneType={props.zoneType} />
					))
				}
			</div>
		</div>
	);
};

export default DestinationZone;
