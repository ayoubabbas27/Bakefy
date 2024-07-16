import Image from 'next/image'
import {TEAM} from '@/constants'

const page = () => {
  return (
    <div className=' p-5 flex flex-col justify-center items-center gap-24'>
      <div className='flex flex-col justify-center items-center gap-7 mt-5 xl:mt-18'>
        <span className='text-3xl sm:text-4xl font-bold text-[#FF7043] xl:mb-9'>The Story of Bakefy</span>
        <div className='w-full flex flex-col justify-center items-center gap-6 lg:flex-row lg:gap-12 lg:px-5'>
          <Image src='/images/bakeryShop.jpg' alt='bakery shop' width={400} height={100} className='rounded-md shadow-md'/>
          <p className='lg:w-[500px] xl:w-[700px]'>
            At <span className='font-bold'>Bake<span className='text-[#FF7043]'>fy</span></span>, we believe in the magic of fresh, high-quality baked goods. Our journey began with a simple love for baking and a passion for sharing the joy of freshly baked treats with our community. Founded by a group of dedicated bakers and pastry enthusiasts, Bakefy has grown from a small kitchen experiment to a beloved local bakery. Our commitment to using the finest ingredients and traditional baking methods has remained unwavering, ensuring that every bite is a delightful experience.
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7 xl:mt-18'>
        <span className='text-3xl sm:text-4xl  font-bold text-[#FF7043] xl:mb-9'>The Team</span>
        <div className='w-full flex flex-col justify-center items-center gap-6 mb-3'>
          <p className='lg:w-[500px] xl:w-[700px] text-center mb-16'>
            Our diverse team shares a common love for baking and dedication to excellence. From master bakers to customer service reps, each member plays a vital role in making every Bakefy experience memorable and enjoyable.          
          </p>
          <div className='flex flex-row flex-wrap justify-center items-center gap-20'>
            {
              TEAM.map((member, index) => (
                <div key={index} className='relative w-96 pt-16 p-4 flex flex-col justify-center items-center gap-4 rounded-md shadow-md bg-slate-400 bg-opacity-20 min-h-56'>
                  <Image src={member.image} alt='profile picture' width={100} height={100} className='rounded-full absolute left-30 -top-12'/>
                  <span className='font-semibold text-xl text-center'>{member.name}</span>
                  <span className='font-semibold text-wrap text-center'>{member.position} - {member.experience}</span>
                  <span className='italic text-center'>{member.message}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-7'>
        <span className='text-3xl sm:text-4xl font-bold text-[#FF7043] xl:mb-9'>Our Vision</span>
        <p className='lg:w-[500px] xl:w-[700px] text-center mb-14'>
          We aim to expand our offerings and reach more people craving quality and convenience. Our vision is to be the go-to destination for baked goods, continually innovating and improving our services to meet our customers' needs. The future of Bakefy is bright, and we're excited to continue spreading joy through delicious, freshly baked goods.
        </p>
      </div>

    </div>
  )
}

export default page