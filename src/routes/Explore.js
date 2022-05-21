import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import ee from '../images/ee.jpg'
import bb from '../images/bb.jpg'
import el from '../images/el.jpg'
import fff from '../images/fff.jpg'
import ll from '../images/ll.jpg'
import rr from '../images/rr.jpg'

function Explore() {
    const [numberOfLikes, setNumberOfLikes] = useState(12);
  return (
    <div className='w-full h-screen flex flex-col justify-between bg-slate-50 '>
        {/* <h3 className='text-teal text-center text-2xl md:none'>Explore</h3> */}
        <NavBar />
        <div className='cards-section mt-24 md:w-11/12 md:mx-auto md:flex md:flex-row 
            md:flex-wrap bg-slate-50 md:h-full md:mt-32'>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={ee} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={bb} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in mr-2' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={el} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={fff} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={rr} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-11/12 mx-auto mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={ll} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
        </div>
        
        
       
       
       
       
       
       
       
    </div>
  )
}

export default Explore