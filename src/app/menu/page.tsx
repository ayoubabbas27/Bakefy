import {MENU} from '@/constants'
import Button from '../../components/ui/Button'

const page = () => {
  return (
    <div className=''>
      <div className='relative md:max-h-[500px] overflow-hidden'>
        <div className='relative w-full h-full'>
          <img 
            src='/images/CTAbg.jpg'
            alt='menu section image'
            
            className='w-full h-full object-cover'
          />
          <div className="absolute inset-0 bg-gray-700 blur bg-opacity-40"></div>
        </div>
        <div className='absolute inset-0 flex flex-col gap-4 justify-center items-center px-10 md:px-20 lg:px-60 md:gap-6 lg:gap-10'>
          <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center'>Explore Our Delicious Menu</h1>
          <span className='text-white font-medium md:text-lg lg:text-xl text-center mb-4 xl:px-36'>From Croissants to Cupcakes, Indulge in Handcrafted Delights</span>
          <Button 
            title='Order Now'
            icon='/icons/bread_white.svg'
            variant='bg-[#FF7043] hover:bg-[#fc5b2a]'
            action='/order'
        />
        </div>
      </div>

      <div className='flex justify-center mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-6 py-12'>
          {
            MENU.map((product, index) => (
              <div key={index} className=' relative mb-12 flex flex-col pt-24 justify-start items-center gap-4 w-80 bg-white border-2 border-slate-100 bg-opacity-30 p-4 rounded-md shadow-md'>
                <div className= 'w-60 h-40 rounded-md absolute -top-20 overflow-hidden shadow-sm'>
                  <img 
                    src={product.image} 
                    alt='product image' 
                    className='object-cover w-full h-full'
                  />
                </div>
                
                <div className='w-full flex flex-col justify-center items-start gap-3'>
                  <span className='w-full font-bold text-xl text-wrap'>{product.name}</span>
                  <span className='w-full  text-wrap'>{product.description}</span>
                  <span className='w-full text-lg font-bold text-[#FF7043] text-wrap'>{product.price}</span>
                  <span className='font-semibold underline'>Ingredients :</span>
                  <span className='w- italic text-wrap'>{product.ingredients}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      
      
    </div>
  )
}

export default page