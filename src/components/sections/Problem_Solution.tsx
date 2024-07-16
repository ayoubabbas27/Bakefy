
const Problem_Solution = () => {
  return (
    <section className='mt-14 px-5 w-full flex flex-col justify-center items-center gap-6 xl:mt-24'>
      <h1 className='text-3xl sm:text-4xl text-[#FF7043] font-bold mb-9 text-center'>The Problem We Solve</h1>
      <div className="w-full flex flex-col justify-center items-center gap-6 lg:flex-row lg:px-3 xl:px-12 lg:gap-20 xl:gap-28 ">
        <div className='w-96 h-auto lg:w-[400] xl:w-[500px] rounded-md'>
          <video controls autoPlay muted loop className='rounded-md shadow-md w-full mb-3'> 
            <source src='/videos/bakeryVid.mp4'/>
            <source src='/videos/vid.webm'/>
          </video>
        </div>
        <div className='flex flex-col justify-center items-start gap-4 text-lg lg:p-0'>
          <p className='lg:w-[500px] xl:w-[700px] text-wrap'>
            <span className='font-semibold '>Finding time to enjoy fresh, high-quality baked goods can be tough.</span> Long lines, sold-out items, and multiple store visits make it hard for busy people to get their favorite treats.
          </p>
          <p className='lg:w-[500px] xl:w-[700px] text-wrap'>
            <span className='font-semibold underline'>Picture this:</span> you plan a special breakfast, but the bakery is out of croissants. You drive to another, wasting time and energy, only to face the same disappointment. The excitement turns to frustration.
          </p>
          <p className='lg:w-[500px] xl:w-[700px] text-wrap'>
            At <span className='font-bold'>Bake<span className='text-[#FF7043]'>fy</span></span>, we get it. That is why our website lets you browse and order delicious pastries, breads, and cakes from home. <span className='font-semibold'>With just a few clicks</span>, enjoy fresh baked goods delivered to your door. No more lines, no more sold-outs – just tasty treats, whenever you want them.
          </p>
        </div>
      </div>
      
      
    </section>
  )
}

export default Problem_Solution