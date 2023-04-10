import React, { MouseEventHandler } from 'react';
import { RxReset } from 'react-icons/rx'
import { GiCheckMark } from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { applyChanges, revertChanges } from '../redux/candidatesSlice';
import '../theme/LightTheme.scss'
interface IButtonProps {
    isPrimary: boolean
    title: string
    onClick: MouseEventHandler<HTMLDivElement>
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={`zoneShadow h-[70px] w-full m-[20px] rounded flex items-baseline justify-center cursor-pointer
            ${props.isPrimary
                ? 'bg-blue-700 outline outline-3 outline-white'
                : 'bg-white outline outline-3 outline-blue-700'}`
        }
            onClick={props.onClick}
        >
            {props.isPrimary
                ? <>
                    <RxReset className='mr-[10px] text-white text-lg' />
                    <h1 className='text-white text-xl' >{props.title}</h1>
                </>
                : <>
                    <GiCheckMark className='mr-[10px] text-blue-700' />
                    <h1 className='text-blue-700 text-xl' >{props.title}</h1>
                </>
            }
        </div>
    );
};

export default Button;
