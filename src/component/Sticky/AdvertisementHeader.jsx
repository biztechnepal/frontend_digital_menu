import React from 'react';

function AdvertisementHeader({ position }) {
  const place = position === 'top' ? 'sticky' : 'footersticky';
  return (
    <div className={place}>
      <div className='container'>
        <img src='/assets/1.gif' alt='' />
      </div>
    </div>
  );
}

export default AdvertisementHeader;
