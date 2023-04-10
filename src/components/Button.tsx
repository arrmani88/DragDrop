import React from 'react';
import { RxReset } from 'react-icons/rx'
import { GiCheckMark } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { applyChanges, revertChanges } from '../redux/candidatesSlice';
import'../theme/LightTheme.scss'
import { useNavigate } from 'react-router-dom';
interface IButtonProps {
    isPrimary: boolean
    title: string
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const dispatch = useDispatch()
	const navigate = useNavigate()


    const handleButtonClick = () => {
        if (props.isPrimary) {
            dispatch(applyChanges())
            navigate('/accepted-candidates')
        } else {
            dispatch(revertChanges())
        }
    }

    return (
        <div className={`zoneShadow h-[70px] w-[200px] m-[20px] rounded flex items-baseline justify-center cursor-pointer
            ${props.isPrimary
                ? 'bg-blue-700 outline outline-3 outline-white'
                : 'bg-white outline outline-3 outline-blue-700'}`
            }
            onClick={handleButtonClick}
        >
            {props.isPrimary
                ? <>
                    <GiCheckMark className='mr-[10px] text-white'/>
                    <h1 className='text-white text-xl' >{props.title}</h1>
                </>
                : <>
                    <RxReset className='mr-[10px] text-blue-700 text-lg' />
                    <h1 className='text-blue-700 text-xl' >{props.title}</h1>
                </>
            }
        </div>
    );
};

export default Button;
