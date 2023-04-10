import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Navbar from '../components/Navbar';
import AcceptedCandidate from '../components/AcceptedCandidate';
import './styles/AcceptedCandidates.scss'


interface IAcceptedCandidatesProps {
}

const AcceptedCandidates: React.FunctionComponent<IAcceptedCandidatesProps> = (props) => {
    const list = useSelector((state: RootState) => state.candidate.finalList)

    return (
        <div>
            <Navbar />
            <div className='flex flex-col pt-[100px] items-center' >
                <div className='flex row items-center justify-center'>
                    <img className='icon' src={require('../images/success-msg.png')} />
                    <h1 className='successfullyAcceptedText'>Candidates accepted successfully</h1>
                </div>
                {list.map((candidate, index) => (
                    <AcceptedCandidate candidate={candidate} key={index} />
                ))}
            </div>
        </div>
    );
};

export default AcceptedCandidates;
