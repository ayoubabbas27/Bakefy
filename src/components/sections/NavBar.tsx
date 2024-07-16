"use client"
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import {useState} from 'react'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'
import Image from 'next/image'


const NavBar = () => {

  const [sideBarVisible, setSideBarVisible] = useState(false);


  const isActive = (href: string) => usePathname() === href;

  return (
    <nav className='sticky bg-white top-0 left-0 w-full flex flex-row justify-between items-center z-30 py-5 px-10 border-b-2 border-slate-200'>
        <Link href="/">
            <span className='font-bold text-2xl'>
                Bake<span className='text-[#FF7043]'>fy.</span>
            </span>
        </Link>
        <ul className='hidden text-[16px] font-[400] h-full gap-12 lg:flex'>
          {
            NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key}
                className={`${ (isActive(link.href)) ? 'text-[#FF7043] font-bold' : 'text-gray-500 hover:font-bold'}  cursor-pointer flex justify-center items-center pb-1.5 transition-all duration-200 ease-in-out `}
              >
                  {link.label}
              </Link>
            )) 
          }
        </ul>

        <div className='lg:flex lg:justify-center lg:items-center hidden'>
          <Button 
            title='Order Now'
            icon='/icons/bread_white.svg'
            variant='bg-[#FF7043] hover:bg-[#fc5b2a]'
            action='/order'
          />
        </div>
        
        <Image 
          src={sideBarVisible ? '/icons/close.svg': '/icons/menu.svg'}
          alt='menu'
          width={32}
          height={32}
          className={`inline-block cursor-pointer rounded-full z-40 lg:hidden hover:shadow-sm`}
          onClick={() => setSideBarVisible(prevVis => !prevVis)}
        />

        <div onClick={() => setSideBarVisible(false)} className={`z-20 fixed top-0 left-0 w-full h-full blur-md  bg-white bg-opacity-5 backdrop-blur-sm ${sideBarVisible ? 'block' : 'hidden'} lg:hidden transition-all duration-300 ease-in-out`}></div>

        <ul className={`flex flex-col z-30 justify-start items-start fixed top-0 pt-[76px] pl-7 pr-32 ${sideBarVisible ? 'right-0' : '-right-96'} transition-all duration-300 ease-in-out bg-white text-[16px] font-[400] h-full w-80 gap-8 lg:hidden`}>
          {
            NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key}
                className={`${ (isActive(link.href)) ? 'text-[#FF7043] font-bold' : 'text-gray-500 hover:font-bold'} gap-3 cursor-pointer flex justify-center items-center pb-1.5 transition-all duration-200 ease-in-out `}
                onClick={() => setSideBarVisible(false)}
              >
                  <Image src={link.icon} alt={link.label} width={18} height={18} />
                  {link.label}
              </Link>
            )) 
          }
          <li className='flex justify-center items-center mt-6' onClick={() => {setSideBarVisible(false)}}>
            <Button 
              title='Order Now'
              icon='/icons/bread_white.svg'
              variant='bg-[#FF7043] hover:bg-[#fc5b2a]'
              action='/order'
            />
          </li>
        </ul>


    </nav>
  )
}

export default NavBar