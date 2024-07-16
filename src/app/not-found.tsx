import Link from 'next/link'

const notFound = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center gap-5 xl:gap-10 w-full h-[80vh]'>
        <span className='text-4xl font-bold text-[#FF7043]'>Oops! Page Not Found</span>
        <p className='text-center'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href='/' className='underline hover:text-[#FF7043] flex flex-row justify-center items-center gap-2'>
            Go back to Home page
        </Link>
    </div>
  )
}

export default notFound