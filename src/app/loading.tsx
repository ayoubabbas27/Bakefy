import React from 'react'

const loading = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center w-full h-[80vh]'>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className='w-32 h-32'>
            <circle fill="#FF7043" stroke="#FF7043" stroke-width="6" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle>
            <circle fill="#FF7043" stroke="#FF7043" stroke-width="6" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle>
            <circle fill="#FF7043" stroke="#FF7043" stroke-width="6" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle>
        </svg>    
        
    </div>
  )
}

export default loading