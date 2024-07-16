import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-5 py-16 lg:py-32 flex flex-col justify-center items-center gap-12'>
      <h1 className='text-2xl font-bold text-[#FF7043] lg:text-3xl'>Thank You for Reaching Out!</h1>
      <p className='font-lg text-center lg:w-[500px]'>
        Thank you for contacting us! We appreciate your interest in Bakefy. Our team has received your message and will get back to you shortly.
      </p>
      <p className='font-lg text-center lg:w-[500px]'>
        In the meantime, feel free to explore more about our delicious baked goods and services.
      </p>

      <Link href='/' className='underline hover:text-[#FF7043] flex flex-row justify-center items-center gap-2'>
        Go back to Home page
      </Link>
    </div>
  )
}

export default page