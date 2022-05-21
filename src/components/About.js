import React from 'react'
import ttt from '../images/ttt.jpg'

const About = () => {
  return (
    <div className='about flex flex-col mt-8 '>
       <h3 className='text-teal text-xl text-center mt-16
        md:text-3xl md:mt-2'>Know Us</h3>
        <div  className='about-section flex flex-col  w-11/12 mt-16 mx-auto h-80 justify-center
          md:flex-row md:mt-4'>
          <div className='img-section w-full bg-teal md:w-3/6'>
            <img src={ttt} className='image w-full md:h-full' alt="elephant"/>
          </div>
          <div className='w-full bg-yellow-500 md:w-3/6 md:flex md:justify-center md:items-center
           md:h-full'>
              <p className='text-gray-50 font-semibold mx-auto  text-center leading-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, 
                vitae asperiores molestiae iure praesentium fugit non dolore dicta totam 
                vero id rem minus? Architecto labore cupiditate ducimus unde dignissimos,
                asperiores enim incidunt accusamus neque quae rem 
               
              </p>
          </div>
        </div>
       
    </div>
  )
}

export default About