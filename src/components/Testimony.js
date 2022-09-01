import React from 'react';
import '../styles/Testimony.css';

function Testimony(props) {
  return(
    <div className='container-testimony'>
      <img className='image-testimony' src={require(`../image/testimonio-${props.imageName}.png`)} alt={`Foto de ${props.imageName}`} />
      <div className='container-text'>
        <p className='name-testimony'>{props.name} en {props.state}</p>
        <p className='position-testimony'>{props.position} en <span>{props.work}</span></p>
        <p className='description-testimony'>{props.testi}</p>
      </div>
    </div>
  );
};

export default Testimony