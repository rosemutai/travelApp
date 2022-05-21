import React from 'react'
import el from '../images/el.jpg'
import tt from '../images/tt.jpg'
import mmm from '../images/mmm.jpg'


const AdvertCards = () => {
  return (
    <div className='-mt-16 flex flex-col'>
      <h3 className='text-teal text-xl text-center mt-16
        md:text-3xl md:mt-4'>Let us Know Your Experience</h3>
      <div className='cards-section w-full mx-auto mt-4 flex flex-col justify-between 
        md:w-8/12 md:justify-between md:flex-row'>
        <div className='card w-11/12 h-7/12 mx-auto mb-3 md:w-5/12 md:h-4/12 md:mr-3'>
            <img src={el} className='image h-full opacity-100 hover:opacity-50 rounded md:h-6/12' alt="elephant"/>
        </div>

        <div className='card w-11/12  h-7/12 mx-auto mb-3 bg-teal md:w-5/12 md:mr-3'>
            <img src={tt} className='image h-full opacity-100 hover:opacity-50 rounded' alt="elephant"/>
        </div>

        <div className='card w-11/12 h-7/12 mx-auto mb-3 bg-teal md:w-5/12 md:mr-3 md:h-5/12'>
            <img src={mmm} className='image h-full opacity-100 hover:opacity-50 rounded md:' alt="elephant"/>
        </div>
      </div>
        
    </div>
  )
}

export default AdvertCards