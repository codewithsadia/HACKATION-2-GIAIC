import React from 'react';
import Image from 'next/image';

const Detail = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='p-2'>
        <Image
          src="/images/shoesp1.png"
          alt='shoes'
          layout="responsive"
          width={500} // Used for aspect ratio
          height={500} // Used for aspect ratio
        />
      </div>
      <div className='p-2'>
        <Image
          src="/images/text1.png"
          alt='shoes description'
          layout="responsive"
          width={500} // Used for aspect ratio
          height={500} // Used for aspect ratio
        />
      </div>
    </div>
  );
};

export default Detail;
