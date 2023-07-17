import React from 'react';

function AdvertisementHeader({ url, position }) {
  const place = position === 'top' ? 'sticky' : 'footersticky';
  return (
    <div className={place}>
      <div className='container'>
        <img src={url} alt='' />
      </div>
    </div>
  );
}

export default AdvertisementHeader;
