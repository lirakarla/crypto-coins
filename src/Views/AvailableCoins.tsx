import React, { FC } from 'react';

interface AvailableCoinsProps {

}

const AvailableCoinsView: FC<AvailableCoinsProps> = () => {
  return (
    <div className="px-11 py-20">
      <h1 className='text-purple-10 text-3xl font-bold'>AVAILABLE COINS</h1>
      <input type="text" className="w-full mt-16 h-10 rounded-md focus:outline-none bg-gray-10 border-solid border border-white-10 text-zinc-300 p-2.5 "></input>

    </div>
  );
};

export default AvailableCoinsView;