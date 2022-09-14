import React from 'react';

function Testimony(props) {
  return(
    <>
      <div className='max-w-3xl flex justify-center md:items-center mb-4 md:mb-6 p-2 md:p-4 mx-2 shadow-md border border-slate-400 rounded-lg'>
        <img className='w-2/6 sm:w-1/6 rounded-md object-cover md:h-full md:w-48' src={props.imageName} alt={`Foto de ${props.name}`} />
        <div className='w-4/6 sm:w-5/6 text-gray-600 border-l border-slate-400 ml-3 container-text'>
          <p className='text-lg font-bold md:text-2xl'>{props.name} en {props.state}</p>
          <p className='text-sm font-medium md:text-lg'>{props.position}</p>
          <p className='ml-2 text-sm text-center md:text-base'>{props.testi}</p>
        </div>
      </div>
    </>
  );
};

export default Testimony