import {DELIVERY_PARTNERS} from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='px-5 py-16 lg:py-32 flex flex-col justify-center items-center gap-12'>
        <h1 className='text-center sm:text-start text-3xl sm:text-4xl font-bold text-[#FF7043] lg:text-3xl'>Order Your Favorite Treats Today!</h1>
        <span className='text-lg text-center lg:w-[500px]'>Freshly baked and delivered straight to your door through our trusted delivery partners. Choose from our delightful selection and enjoy the best baked goods in town with just a few clicks.</span>
        
        <div className='flex flex-row flex-wrap justify-center items-center gap-5'>
            {
                DELIVERY_PARTNERS.map((partner, index) => (
                    <Link key={index} href={partner.href} target='_blank' className='flex flex-row flex-wrap justify-center items-center gap-5 p-4 bg-white shadow-md rounded-md border-2 border-slate-200 w-[340px] transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-slate-100'>
                        <Image src={partner.logo} alt='partner logo' width={70} height={70}/>
                        <span className='font-bold text-3xl'>{partner.name}</span>
                        <Image src='/icons/arrowDi.svg' alt='partner logo' width={30} height={30}/>
                    </Link>
                ))
            }
        </div>
        
    </div>
  )
}

export default page