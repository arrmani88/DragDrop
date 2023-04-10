import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './styles/ExpandedCandidate.scss'
import ReactSlider from 'react-slider';
import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'
import cloneDeep from 'lodash.clonedeep';
import Checkbox from 'rc-checkbox';
import { IoMdCloseCircle } from 'react-icons/io'
import { collapseCandidate } from '../redux/expandedCandidateSlice';
import { useDispatch } from 'react-redux';
import DialogButton from './DialogButton';
import { evaluateCandidate } from '../redux/candidatesSlice';

interface IExpandedCandidateProps {
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const specializations = [
    { key: 1, text: 'Front-end', value: 1 },
    { key: 2, text: 'Back-end', value: 2 },
]
const specializationsArray = ['Front-end', 'Back-end']
const renderLabel = (label: any) => ({
    content: `${label.text}`
})

const ExpandedCandidate: React.FunctionComponent<IExpandedCandidateProps> = (props) => {
    const dispatch = useDispatch();
    const expandedCandidate = cloneDeep(useSelector((state: RootState) => state.expandedCandidate.candidate))
    let speclz: Array<string>
    let defaultSpeclzValuesIndexes: Array<number>
    const addSpecialization = (arr: Array<number>) => {
        speclz = []
        arr.forEach((element, index) => {
            console.log('index=', index)
            console.log('element=', element)
            speclz.push(specializations[element - 1].text)
        });
    }
    const [rating, setRating] = useState<number | null>()
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState<boolean>(expandedCandidate?.conserveData ?? false)

    const closeCard = () => { dispatch(collapseCandidate()) }
    const evaluate = () => {
        dispatch(evaluateCandidate({ ...expandedCandidate, profileRating: rating, conserveData: isCheckBoxChecked, specialization: speclz }))
        dispatch(collapseCandidate())
    }
    const speclzToIndexesArray = () => {
        defaultSpeclzValuesIndexes = []
        if (expandedCandidate?.specialization) {
            expandedCandidate?.specialization.forEach((sp) => {
                defaultSpeclzValuesIndexes.push(specializationsArray.indexOf(sp) + 1)
            })
        }
        return defaultSpeclzValuesIndexes
    }

    return (
        <div className='w-full h-full fixed bg-black bg-opacity-20 z-10  backdrop-filter backdrop-blur-md flex justify-center items-center' >
            <div className='container flex row rounded-3xl'>
                <IoMdCloseCircle onClick={closeCard} className='cursor-pointer absolute h-[50px] w-[50px] ml-[10px] mt-[10px] text-white' />
                <img className='expandedImage' src={require(`../images/${expandedCandidate?.photo ?? 'blank-profile-image.png'}`)} />
                <div className='blueBox' >
                    <div className='flex flex-col' >
                        <h1 className='text-white text-center text-4xl my-[10px]' >{expandedCandidate?.fullName}</h1>
                        <div className='mt-[30px]' />
                        <h1 className='text-white text-xl my-[10px]'>Rating:</h1>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="map-marker"
                            trackClassName="example-track"
                            markClassName="mark"
                            min={0}
                            max={5}
                            marks={[0, 1, 2, 3, 4, 5]}
                            renderMark={(props) => <span {...props} aria-content={props.key} />}
                            onChange={(rat) => { setRating(rat) }}
                            defaultValue={expandedCandidate?.profileRating}
                        />
                        <div className='mt-[100px]' />
                        <h1 className='text-white text-xl my-[10px]'>Specialization:</h1>
                        <Dropdown
                            multiple
                            selection
                            fluid
                            options={specializations}
                            placeholder='Choose a specialization...'
                            renderLabel={renderLabel}
                            onChange={(event, data) => { console.log('data.value=', data.value); addSpecialization(data.value as Array<number>) }}
                            defaultValue={speclzToIndexesArray()}
                        />
                        <div className='mt-[5px]' />
                        <div className='flex row items-baseline cursor-pointer' onClick={() => { setIsCheckBoxChecked(!isCheckBoxChecked) }} >
                            <Checkbox checked={isCheckBoxChecked} className='checkbox relative h-[20px] w-[20px] mr-[10px] top-1' />
                            <h1 className='text-white text-xl'>Conserve user data</h1>
                        </div>
                    </div>
                    <div className='flex row' >
                        <DialogButton onClick={closeCard} title='Cancel' isPrimary={true} />
                        <DialogButton onClick={evaluate} title='Save' isPrimary={false} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandedCandidate;

// onChange={(e) => { setIsCheckBoxChecked(e.target.checked) }}