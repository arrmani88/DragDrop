import * as React from 'react';
import CandidateInterface from '../interfaces/CandidateInterface';
import './styles/AcceptedCandidate.scss'

interface IAcceptedCandidateProps {
    candidate: CandidateInterface
}

const AcceptedCandidate: React.FunctionComponent<IAcceptedCandidateProps> = (props) => {
  return (
    <div className='wrapper m-[30px]'>
        <img className='photo' src={require(`../images/${props.candidate.photo ?? 'blank-profile-image.png'}`)} />
    </div>
  );
};

export default AcceptedCandidate;
