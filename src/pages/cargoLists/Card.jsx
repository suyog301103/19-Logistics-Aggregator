import React from 'react';

function Card(props) {
  const { imageUrl, name, description } = props;

  return (
    <div className='w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg'>
      <img className='w-full h-auto' src={imageUrl} alt='pic' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
}

export default Card;
