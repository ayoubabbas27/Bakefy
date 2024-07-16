
const page = () => {
  return (
    <div className=' px-5 py-16 lg:py-32 flex flex-col justify-center items-center gap-12 lg:flex-row lg:gap-16'>
      <div className='flex flex-col justify-center items-center gap-8 lg:items-start'>
        <span className='text-3xl sm:text-4xl text-center sm:text-start font-bold text-[#FF7043] lg:text-4xl lg:w-96'>Have a Question? We're Here to Help!</span>
        <p className='text-lg text-center lg:text-start lg:w-[500px]'>
        We're excited to hear from you! Whether you have a question about our products, need assistance with an order, or just want to share your love for baked goods, we're here to help.
        </p>
      </div>

      <form method="POST" action={`https://formsubmit.co/${process.env.EMAIL_KEY}`} className='bg-[#FF7043] bg-opacity-20 p-6 rounded-md shadow-md flex flex-col justify-center items-center gap-4 w-96 lg:w-[500px]'>
        <span className='font-bold text-2xl'>
          Bake<span className='text-[#FF7043]'>fy.</span>
        </span>
        <div className='w-full flex flex-col justify-center items-start gap-2'>
          <label htmlFor="name" className='font-semibold'>Name :</label>
          <input type="text" name="name" placeholder='Name' required className='w-full bg-white border-2 border-slate-200 shadow-md rounded-md p-3 '/>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-2'>
          <label htmlFor="name" className='font-semibold'>Email :</label>
          <input type="email" name="email" placeholder='Email' required className='w-full bg-white border-2 border-slate-200 shadow-md rounded-md p-3 '/>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-2'>
          <label htmlFor="name" className='font-semibold'>Message :</label>
          <textarea name="message" id="message" required placeholder='Write your message here...' className='min-h-40 min-w-full bg-white border-2 border-slate-200 shadow-md rounded-md p-3 '></textarea>
        </div>
        <div className='w-full flex flex-row justify-start items-start gap-4 mt-4'>
          <button type="submit" className='px-6 py-2 border-2 border-black text-lg font-bold bg-[#131313] shadow-sm rounded-lg text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:shadow-md'>Send</button>
          <button type="reset" className='px-6 py-2 text-lg font-bold bg-transparent border-2 border-black shadow-sm rounded-lg text-black transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-md'>Reset</button>
        </div>
        <input type="hidden" name="_next" value='http://localhost:3000/contact_us/thank_you' />
      </form>
      
    </div>
  )
}

export default page