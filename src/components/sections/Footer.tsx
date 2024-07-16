import Link from 'next/link'
import {FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS} from '@/constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=' flex justify-center items-center mb-24 border-t-2 border-slate-200'>
      <div className='px-5 py-7 w-full flex flex-col gap-14 lg:px-12'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <span className='font-bold text-2xl'>
                Bake<span className='text-[#FF7043]'>fy.</span>
            </span>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {
              FOOTER_LINKS.map((column) => (
                <FooterColumn title={column.title}>
                  <ul className='flex flex-col gap-4 text-gray-400'>
                    {
                      column.links.map((link, index) => (
                        <Link href='/' key={index} className='transition-all duration-200 ease-in-out hover:font-bold'>
                          {link}
                        </Link>
                      ))
                    }
                  </ul>
                </FooterColumn>
              ))
            }

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className='flex flex-col gap-4 text-gray-400'>
                    {
                      FOOTER_CONTACT_INFO.links.map((link, index) => (
                        <Link href='/' key={index} className='flex gap-4 md:flex-col lg:flex-row'>
                          <p className='whitespace-nowrap'>
                            {link.label}:
                          </p>
                          <p className='whitespace-nowrap text-black'>
                            {link.value}
                          </p>
                        </Link>
                      ))
                    }
                  </ul>
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex flex-row gap-4 text-gray-400'>
                  {
                    SOCIALS.links.map((link, index) => (
                      <Link href='/' key={index} className='flex gap-4 md:flex-col lg:flex-row hover:shadow-sm'>
                        <Image src={link} alt='logo' width={24} height={24}/>
                      </Link>
                    ))
                  }
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-300'/>
        <p className='w-full text-center text-gray-400'>2024 Bakefy | All rights reserved | Made by Abbas Ayoub</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string,
  children: React.ReactNode
} 

const FooterColumn = ({ title , children}: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer