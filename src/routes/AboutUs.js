import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import road from '../images/road.jpg'

const AboutUs = () => {
  return (
    <div className='w-full h-full bg-slate-50 md:relative'>
      <NavBar />
      <div className='w-full md:h-96 md:bg-red-500'>
        <img className='w-full h-full md:object-cover' src={road} alt="road travel"/>
      </div>

      <div className=' bg-yellow-500 w-11/12 mx-auto  inset-x-4 mt-3 md:-mt-6 md:absolute md:z-20  md:w-8/12'>
         <h3 className='text-teal text-xl text-center mt-3
          md:text-3xl md:mt-2'>Our Story</h3>
          <p className='p text-slate-50 text-center w-11/12 mx-auto h-48 py-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Molestiae aspernatur molestias, numquam inventore, minima eligendi 
            non odio a ea veritatis dolorem dolorum voluptatibus. Doloribus 
            quia animi nisi, architecto perspiciatis amet!
          </p>
      </div>

      <div className='  w-10/12 mx-auto  inset-x-4 mt-3 flex flex-wrap justify-evenly md:mt-64 '>
        <div className='smallcard w-24 h-24 mb-3 bg-slate-200 text-slate-50 text-center hover:opacity-60 flex 
            flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-road text-teal text-2xl"></i>
             <h3 className='font-bold text-teal w-5/6 mx-auto'>Travel</h3>
            {/* <p className='my-3 mx-auto  w-7/12 text-center leading-5'> Post your first Adventure</p> */}
        </div>

        <div className='smallcard w-24 h-24 mb-3 bg-slate-200 text-slate-50 text-center hover:opacity-60 flex 
            flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-globe text-teal text-2xl"></i>
             <h3 className='font-bold text-teal w-5/6 mx-auto'>Experience</h3>
            {/* <p className='my-3 mx-auto  w-7/12 text-center leading-5'> Post your first Adventure</p> */}
        </div>

        <div className='smallcard w-24 h-24 mb-3 bg-slate-200 text-slate-50 text-center hover:opacity-60 flex 
            flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-share-alt text-teal text-2xl"></i>
             <h3 className='font-bold text-teal w-5/6 mx-auto'>Share</h3>
            {/* <p className='my-3 mx-auto  w-7/12 text-center leading-5'> Post your first Adventure</p> */}
        </div>

         <div className='smallcard w-24 h-24 mb-3 bg-slate-200 text-slate-50 text-center hover:opacity-60 flex 
            flex-col justify-evenly md:w-48 md:h-48 md:mr-6'>
             <i class="fas fa-user-friends text-teal text-2xl"></i>
             
             <h3 className='font-bold text-teal w-5/6 mx-auto'>Connect</h3>
            {/* <p className='my-3 mx-auto  w-7/12 text-center leading-5'> Post your first Adventure</p> */}
        </div>

         

        
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs