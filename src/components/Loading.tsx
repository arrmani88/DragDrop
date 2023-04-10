import React from "react";

interface ILoadingProps {
}

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <div className="w-full h-full fixed bg-black bg-opacity-20 backdrop-filter backdrop-blur-md flex justify-center items-center">
        <h1 className="text-5xl" >Loading...</h1>
    </div>
  );
};

export default Loading;
