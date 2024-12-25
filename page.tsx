import React from 'react'
import Image from 'next/image';
const Cart = () => {
  return (
    <div className='grid grid-cols-2 gap-4 mt-6'>
    <div className="p-2">
      <Image
        src="/images/i1.png"
        alt='Image i1'
        width={1000}
        height={1000}
        layout="responsive"
      />
    </div>
    <div className="p-2">
      <Image
        src="/images/i2.png"
        alt='Image i2'
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  </div>
  )
}

export default Cart;
