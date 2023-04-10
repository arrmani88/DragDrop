import React from "react";
import { ZoneType, zoneTypes } from "../types/zoneType";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DraggableCandidate from "./DraggableCandidate";
import '../theme/LightTheme.scss'
import { useDrop } from "react-dnd";

interface ISourceZoneProps { }

const SourceZone: React.FunctionComponent<ISourceZoneProps> = () => {
	const candidates = useSelector((state: RootState) => state.candidate)
	const [, drop] = useDrop(() => ({
		accept: 'khuya system tay7, makan dekkhloch vnadem',
		drop: () => {
		}
	}), [candidates])

	return (
		<div className={`blueShadow min-h-[20vh] m-[20px] rounded-xl p-[35px] flex flex-col items-center justify-start `}>
			<h1 className="pb-[10px] text-3xl" >Drag candidates from here...</h1>
			<div className="flex row flex-wrap justify-center">
				{candidates.temporary.initial.map((candidate, index) => (
					<DraggableCandidate candidate={candidate} zoneType={zoneTypes.INITIAL_ZONE} key={index} />
				))}
			</div>
		</div>
	);
};

export default SourceZone;
