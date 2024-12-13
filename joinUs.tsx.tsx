import React from 'react'
import Image from 'next/image';

const JoinUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Image
        src="/images/join1.png"
        alt='join1'
        width={500}
        height={500}
      />
      <Image
        src="/images/join2.png"
        alt='join2'
        width={500}
        height={500}
      />
    </div>
  )
}

export default JoinUs;
