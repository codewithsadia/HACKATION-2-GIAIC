import React from 'react'
import Image from 'next/image'
const Check = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Image
        src="/images/hh1.png"
        alt='join1'
        width={500}
        height={500}
      />
      <Image
        src="/images/hh2.png"
        alt='join2'
        width={500}
        height={500}
      />
    </div>
    
  )
}

export default Check
