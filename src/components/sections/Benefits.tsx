import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  return (
    <section className='mt-14 px-5 w-full flex flex-col justify-center items-center gap-6 xl:mt-24'>
      <h1 className='text-3xl sm:text-4xl text-[#FF7043] font-bold mb-9 text-center'>Why Choose Bakefy ?</h1>
      <div className='w-full flex flex-col justify-center items-center gap-9 sm:gap-5 px-3 lg:max-w-[900px]'>

        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-7'>
          <Image 
            src='/images/benefit1.avif'
            alt='benefit'
            width={200}
            height={400}
            className='rounded-md shadow-md'
          /> 
          <div className='flex flex-col justify-center items-center sm:items-start gap-2'>
            <span className='font-semibold text-lg text-center sm:text-start'>1. Enjoy Fresh Baked Goods</span>
            <p className='italic text-center sm:text-start'>Our baked goods are made daily with the finest ingredients, ensuring you get the freshest and tastiest treats every time.</p>
          </div>
        </div>

        <div className='w-full flex flex-col justify-between items-center gap-7 sm:hidden'>
          <Image 
            src='/images/benefit2.avif'
            alt='benefit'
            width={200}
            height={400}
            className='rounded-md shadow-md'
          />
          <div className='flex flex-col justify-center items-center gap-2'>
              <span className='font-semibold text-lg text-center sm:text-start'>2. Save Time and Effort</span>
              <p className='italic text-center sm:text-start'>Skip the lines and avoid the hassle of store visits. Use our easy website to order your favorite pastries, breads, and cakes from home, delivered right to your door.</p>
          </div>
        </div>

        <div className='hidden w-full sm:flex flex-row justify-between items-center gap-7'>
          <div className='flex flex-col justify-center items-start gap-2'>
              <span className='font-semibold  text-lg'>2. Save Time and Effort</span>
              <p className='italic text-center sm:text-start'>Skip the lines and avoid the hassle of store visits. Use our easy website to order your favorite pastries, breads, and cakes from home, delivered right to your door.</p>
          </div>
          <Image 
            src='/images/benefit2.avif'
            alt='benefit'
            width={200}
            height={400}
            className='rounded-md shadow-md'
          />
        </div>

        <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-7'>
          <Image 
            src='/images/benefit3.avif'
            alt='benefit'
            width={200}
            height={400}
            className='rounded-md shadow-md'
          /> 
          <div className='flex flex-col justify-center items-center sm:items-start gap-2'>
            <span className='font-semibold text-lg text-center sm:text-start'>3. Discover More Choices</span>
            <p className='italic text-center sm:text-start'>From classic croissants and artisan breads to rich cakes and seasonal specials, Bakefy offers many options to satisfy all your cravings and fit every occasion.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Benefits