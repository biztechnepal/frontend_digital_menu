import React from 'react';

function AdvertisementHeader({ url, link, position }) {
  const place = position === 'top' ? 'sticky' : 'footersticky';
  return (
    <div className={place}>
      <div className='container'>
        <a href={link} target='__blank'>
          <img src={url} alt='' />
        </a>
      </div>
    </div>
  );
}

export default AdvertisementHeader;
