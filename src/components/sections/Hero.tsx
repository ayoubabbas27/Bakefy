import Button from '../ui/Button'
import { HERO_CONTENT } from '@/constants'

const Hero = () => {
  return (
    <header className='relative md:max-h-[700px] overflow-hidden'>
      <div className='relative w-full h-full'>
        <img 
          src='/images/back.jpg'
          alt='hero section image'
          
          className='w-full h-full object-cover'
        />
        <div className="absolute inset-0 bg-gray-700 blur bg-opacity-40"></div>
      </div>
      
      <div className='absolute inset-0 flex flex-col gap-2 justify-center items-center px-10 md:px-20 lg:px-60 md:gap-6 lg:gap-10'>
        <h1 className='text-white font-bold text-2xl sm:3xl md:text-4xl lg:text-5xl text-center'>{HERO_CONTENT.HEADER}</h1>
        <span className='text-white font-medium md:text-lg lg:text-xl text-center mb-4 xl:px-36'>{HERO_CONTENT.SLOGAN}</span>
        <Button 
          title='Order Now'
          action='/order'
          icon='/icons/bread_white.svg'
          variant='bg-[#FF7043] hover:bg-[#fc5b2a]'
        /> 
      </div>
    </header>
  )
}

export default Hero