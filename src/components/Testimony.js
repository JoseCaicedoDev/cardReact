import React from 'react';
import '../styles/Testimony.css';

function Testimony(props) {
  return(
    <div className='flex w-4/5 mb-5 p-3 border border-slate-400 rounded-lg'>
      <img className='w-1/4 rounded-md object-cover image-testimony' src={props.imageName} alt={`Foto de ${props.name}`} />
      <div className='text-gray-600 border-l border-slate-400 ml-4 container-text'>
        <p className='text-lg font-bold name-testimony'>{props.name} en {props.state}</p>
        <p className='text-sm font-medium position-testimony'>{props.position}</p>
        <p className='ml-2 text-sm text-center description-testimony'>{props.testi}</p>
      </div>
    </div>
  );
};

export default Testimony