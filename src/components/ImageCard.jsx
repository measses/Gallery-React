import React, { useState } from 'react';
import ModalImage from 'react-modal-image';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <ModalImage className='w-full h-64 object-cover'
        small={image.webformatURL}
        large={image.largeImageURL}
        alt={image.user}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-royal-blue-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4 flex flex-wrap'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
