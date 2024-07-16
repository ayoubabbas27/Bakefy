import React from 'react'
import Button from '../ui/Button'

const CTA = () => {
  return (
    <section className=' relative overflow-hidden mt-7 w-full flex flex-col justify-center items-center gap-7 h-72'>
      <div className='relative w-full h-full'>
        <img 
          src='/images/CTAbg.jpg'
          alt='CTA image'
          
          className='w-full h-full object-cover'
        />
        <div className="absolute inset-0 bg-gray-700 blur bg-opacity-50"></div>
      </div>
      <div className='absolute inset-0 flex flex-col gap-10 justify-center items-center'>
        <h1 className='font-bold text-3xl text-white text-center'>So! Eager for Some Oven-fresh Goodies?</h1>
        <Button 
              title='Order Now'
              icon='/icons/bread_white.svg'
              variant='bg-[#FF7043] hover:bg-[#fc5b2a]'
              action='/order'
        />
      </div>
      
    </section>
  )
}

export default CTA