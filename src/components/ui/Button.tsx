import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


type ButtonProps = {
    title: string,
    icon?: string,
    variant: string,
    action: string,
}
const Button = ({ title, icon, variant , action}: ButtonProps) => {
  return (
    <Link
        href={`${action}`}
        className={`${variant} flex flex-row justify-center items-center gap-3 rounded-lg px-6 py-3 text-white transition-all group group-hover:cursor-pointer`}
    >
        {icon && <Image src={icon} alt='icon' width={24} height={24}/>}
        <span className='font-bold whitespace-nowrap'>{title}</span>
    </Link>
  )
}

export default Button