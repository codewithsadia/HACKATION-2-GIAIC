import React from 'react'
import Image from 'next/image';


const Loging = () => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <Image
        src="/images/detail.png"
        alt='login'
        width={500}
        height={500}
      />
    </div>
  )
}

export default Loging;
