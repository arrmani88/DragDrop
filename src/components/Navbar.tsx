import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className='bg-blue-700 w-screen h-[100px] fixed flex items-center justify-between z-10' >
        <h2 className='text-white text-3xl pl-[100px] m-[0px] !important md:text-5xl' >Select your candidates</h2>
        <h2 className='text-white text-3xl pr-[100px] m-[0px] !important md:text-5xl' >PayTic</h2>
    </div>
  );
};

export default Navbar;
