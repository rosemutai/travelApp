import {React, useState} from 'react'
import ee from '../images/ee.jpg'
import bb from '../images/bb.jpg'
import el from '../images/el.jpg'
import fff from '../images/fff.jpg'
import ll from '../images/ll.jpg'
import rr from '../images/rr.jpg'

const Profile = () => {
    const [numberOfLikes, setNumberOfLikes] = useState(12);
    return (
        <div className='user-profile flex flex-col bg-slate-50 text-gray-50 w-full h-screen'>
            <div className='image-followersection w-full bg-teal flex flex-col '>
                <div className=' flex md:flex md:justify-center'>
                    <div className='profile-pic'>
                        <img className='w-32 h-32 rounded-circle md:mt-8 md:ml-48' src={ee}  alt='my profile' />
                    </div>
                    <div className='folowing mt-6 w-8/12 ml-auto flex justify-evenly md:justify-start'>
                        <div className='my-followers flex flex-col'>
                            <h4>followers</h4>
                            <span className='mt-1'>344</span>
                        </div>

                        
                        <div className='my-followers flex flex-col md:ml-11'>
                            <h4>following</h4>
                            <span className='mt-1'>344</span>
                        </div>
                    </div>
                </div>
                <div className='bio w-8/12 ml-auto'>
                    <p className=' -mt-10'>lorem bio lorem istitytyt bty trrexcdd</p>
                </div>

            </div>
            <div className='my-posts w-11/12 mt-8 md:w-11/12 mx-auto flex flex-row 
            flex-wrap bg-slate-50 justify-evenly'>
                
            <div className='card w-4/12 mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={ee} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-4/12  mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={bb} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in mr-2' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-4/12  mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={el} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-4/12 mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={fff} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-4/12 mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={rr} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
            <div className='card w-4/12 mb-3 md:w-96 md:h-96 md:relative'>
                <img className='w-full md:h-full' src={ll} alt="aeroplane"/>
                <h3 className='opacity-0 md:hover:opacity-50  md:absolute md:z-10 md:w-full md:text-teal text-2xl
                    md:inset-0 md:bg-slate-50 md:text-center md:flex md:justify-center md:items-center
                    transition-all duration-300 ease-in' ><i class="far fa-heart text-2xl mr-2"></i>{numberOfLikes}</h3>
            </div>
        </div>
        </div>
    )
}

export default Profile