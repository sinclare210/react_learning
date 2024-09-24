import React from 'react'

const Main = () => {
  return (
    <div className='bg-[#282D35] h-screen'>
        <div className='pt-20 ml-10 space-y-8 flex flex-col justify-center'>
            <div className=''>
             <h1 className='font-inter text-3xl font-extrabold text-white'>
            Fun facts about React
        </h1>
        </div>
       
        <div className='text-white ml-10 marker:text-[#61DAFB] marker:text-2xl text-2xl'>
             <li className='font-inter'>
                Was first released in 2013
            </li>
             <li className='font-inter'>
                Was originally created by Jordan Walke
            </li>
             <li className='font-inter'>
                Has well over 100k stars on GitHub
            </li>
             <li className='font-inter'>
                Is maintained by Facebook
            </li>
             <li className='font-inter'>
                Power thousands of enterprise apps, including mobile apps
            </li>
        </div>
        </div>
        
       
    </div>
  )
}

export default Main