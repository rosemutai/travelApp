import React from 'react'

const Process = () => {
  return (
    <div className='process-steps mb-8 mx-auto flex flex-col'>
      <h3 className='text-teal text-xl text-center mt-20
        md:text-3xl md:mt-8'>Join us With these Quick Steps</h3>
      <div className='process-steps w-full my-8 mx-auto flex flex-col justify-between items-center text-gray-50
      md:flex-row md:w-9/12 md:justify-center'>
        <div className='small-card w-52 h-52 mb-3 bg-slate-200 rounded-circle text-center hover:opacity-60 flex 
          flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
            <i class="fa fa-user text-teal text-2xl"></i>
            <h3 className='font-bold text-teal'>Step 1</h3>
              <p className='my-3 mx-auto  w-7/12 text-center leading-5 text-teal'>Register by clicking the Sign Up link </p>
        </div>

        <div className='smallcard w-52 h-52 mb-3 bg-slate-200 rounded-circle text-center hover:opacity-60 flex 
        flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-camera text-teal text-2xl"></i>
             <h3 className='font-bold text-teal'>Step 2</h3>
            <p className='my-3 mx-auto  w-7/12 text-center leading-5 text-teal'> Post your first Adventure</p>
        </div>

         <div className='small-card w-52 h-52 mb-3 bg-slate-200 rounded-circle text-center hover:opacity-60 flex
          flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-compass text-teal text-2xl"></i>
             <h3 className='font-bold text-teal'>Step 3</h3>
            <p className='my-3 mx-auto  w-7/12 text-center leading-5 text-teal'>Explore other people's Adventures</p>
        </div>
      </div>
        


    </div>
  )
}

export default Process