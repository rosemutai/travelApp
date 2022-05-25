import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react';
import '../index.css'


function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  



  return (
    <div className='w-full h-full absolute flex flex-col items-center justify-between
     md:bg-teal md:h-24 md:flex md:flex-row md:justify-between   md:w-full'>
      <div className='w-full bg-teal flex justify-between md:w-1/6 md:justify-start
        md:items-center md:mt-0 md:bg-teal md:h-16'>
        <h2 className='logo font-bold p-2 my-2 text-gray-50 md:pl-3 md:my-0'>safiriApp</h2>
        <div className='md:hidden'>
          <button onClick={() =>setIsNavOpen(!isNavOpen)}>
            {!isNavOpen ? (
              <i className='fa fa-bars text-gray-50  h-12 p-2 my-2 mr-2 text-2xl
                 md:hidden'></i>
              ) :(
                
              <i className='fa fa-times text-gray-50  h-12 p-2 my-2 mr-2 text-2xl
                md:hidden'></i>
              )
            }
          

          </button>
          
        </div>
      </div>

        <div className='menu hidden md:w-5/6 md:h-16 md:flex md:items-center md:justify-end'>
       
          <Link className='font-bold mr-4 text-gray-50 hover:text-yellow-500 ' to='/safiriapp'>Home</Link>
          <Link className='font-bold mr-4 text-gray-50 hover:text-yellow-500' to='/about'>About</Link>
          <Link className='font-bold mr-4 text-gray-50 hover:text-yellow-500 ' to='/contact'>Contact Us</Link>
          <Link className='font-bold text-gray-50 hover:text-yellow-500 ' to='/explore'>Explore</Link>
          {isLoggedIn  ?
          
              <button className='button mb-3'>
                <Link to='/signup' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
                  hover:shadow-md hover:shadow-yellow-500 md:ml-12 md:mr-3'>LOGOUT
                </Link>
              </button>
          :
            <>
            <button className='button mb-3'>
              <Link to='/signup' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
              hover:shadow-md  hover:shadow-yellow-500 md:ml-12 md:mr-3'>LOGIN</Link>
            </button>
            <button className='button mb-3'>
              <Link to='/signup' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
              hover:shadow-md  hover:shadow-yellow-500 md:ml-2 md:mr-3'>SIGN UP</Link>
            </button>
              
            </>
            
            
          }
            
      </div>

      <Transition
          show={isNavOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
           {(ref) => (
            <div className="md:hidden  relative bg-teal m-0 text-gray-50 z-20 w-screen  h-96 flex flex-col justify-between" id="mobile-menu">
              <div ref={ref} className=" md:hidden -mt-72 bg-teal h-screen flex flex-col justify-between items-center">
                <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/safiriapp'>Home</Link>
                <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/about'>About</Link>
                <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/contact'>Contact Us</Link>
                <Link className='font-normal text-gray-50 hover:text-yellow-500 hover:font-bold' to='/explore'>Explore</Link>
                {isLoggedIn
                  ? 
                    <button className='button mb-3'>
                      <Link to='/signup' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
                        hover:shadow-md hover:shadow-yellow-500 md:ml-12 md:mr-3'>LOGOUT
                      </Link>
                    </button>
                  :
                    <>
                      <button className='button mb-3'>
                        <Link to='/login' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
                        hover:shadow-md  hover:shadow-yellow-500 md:ml-12 md:mr-3'>LOGIN</Link>
                      </button>
                      <button className='button mb-3'>
                        <Link to='/signup' className='bg-yellow-500 py-2 px-4  rounded-one text-center text-gray-50 tracking-wider
                        hover:shadow-md  hover:shadow-yellow-500 md:ml-2 md:mr-3'>SIGN UP</Link>
                      </button>
              
                    </>
                }
              </div>
               
  
            </div>
          )}
        </Transition>

      

        

    </div>
  )
}

export default NavBar




// larger desktops

// return (
//     <div className='w-full h-16 flex items-center justify-between bg-red-600'>
//       <div className='logo mx-3'>
//         <h2 className='font-bold mr-3 text-gray-50'>safiriApp</h2>
//       </div>

//       <div className='menu mr-4'>
       
//         <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/'>Home</Link>
//         <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/about'>About</Link>
//         <Link className='font-normal mr-4 text-gray-50 hover:text-yellow-500 hover:font-bold' to='/contact'>Contact Us</Link>
//         <Link className='font-normal text-gray-50 hover:text-yellow-500 hover:font-bold' to='/explore'>Explore</Link>
//       </div>

//       <div className='buttons mr-4'>
//         <Link to='/signup' className='bg-yellow-500 py-2 px-4 mr-3 rounded-one text-center text-gray-50 tracking-wider
//         hover:shadow-md hover:tracking-widest hover:shadow-yellow-500'>SIGN UP</Link>
//         {/* <button><a className='font-normal text-gray-50' href='#'>Signin</a></button> */}
//       </div>

        

//     </div>
//   )
