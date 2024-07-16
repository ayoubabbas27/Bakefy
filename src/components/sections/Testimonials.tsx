import React from 'react'
import {TESTIMONIALS} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const Testimonials = () => {
  return (
    <section className='mt-14 px-5 w-full flex flex-col justify-center items-center gap-6 xl:mt-24'>
      <h1 className='text-4xl text-[#FF7043] font-bold mb-9'>Testimonials</h1>
      <div className='flex flex-row justify-center items-center gap-7 flex-wrap'>
        {
          TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className='p-5 rounded-md shadow-md flex flex-col justify-center items-center w-96 min-h-52 gap-3 bg-slate-400 bg-opacity-20'>
              <p className='italic'>{testimonial.content}</p>
              <div className='w-full flex flex-row justify-between items-center'>
                <span className='font-bold'>{testimonial.name}</span>
                <div className='flex flex-row justify-center items-center'>
                  {
                    [...Array(5)].map((_, index) => (
                      <Image 
                        key={index}
                        src={(index < testimonial.rating) ? '/icons/starFull.svg' : '/icons/starEmpty.svg'}
                        alt='star'
                        width={14}
                        height={14}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Link 
        href='###'
        className='font-bold underline text-lg mt-4 hover:text-gray-700 mb-6'
      >
        +230 Reviews on Google
      </Link>
    </section>
  )
}

export default Testimonials