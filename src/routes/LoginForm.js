import React from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    // const [user, setUser] =  useState("Rose");

    // const handleSubmit = (e) =>{
    //     e.preventDefault()

    // }


  return (
    <div className='sign-up flex flex-col bg-slate-50 w-full h-screen'>
        <div className='title w-full flex justify-center mx-auto mt-6 md:w-40'>
            <h3 className='text-yellow-500 text-2xl '>Sign In</h3>
        </div>
        
        
        <div className='form bg-teal w-11/12 h-3/6  my-4 mx-auto md:w-40 '>
            <form className='w-full h-full flex flex-col justify-evenly shadow-md shadow-teal rounded-one'>

                <div className='email'>
                    {/* <label className='text-gray-50 ml-2'>Email Address</label> */}
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500 placeholder-gray-50'  
                        type="text" name="lastname" placeholder="Enter your Email" 
                    />
                </div>

                <div className='password'>
                    {/* <label className='text-gray-50 ml-2'>Password</label> */}
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500 placeholder-gray-50' 
                        type="password" name="password1" placeholder="Password"
                    />
                </div>

                <button className='bg-yellow-500 w-11/12 my-3 ml-1 p-2 text-gray-50 text-widest font-bold
                hover:shadow-md hover:tracking-widest hover:shadow-yellow-500' type='submit'>Sign In</button>


            </form>
            <div className='others bg-teal w-full'>
                <h4 className='text-center text-gray-50'>Or sign in with:</h4>
                <div className='flex justify-center items-center'>
                    <i className="fa fa-google-plus text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                     hover:bg-gray-50 hover:text-teal"></i>
                    <i className="fa fa-facebook text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                    hover:bg-gray-50 hover:text-teal"></i>
                    <i className="fa fa-pinterest text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                    hover:bg-gray-50 hover:text-teal "></i>
                   
                </div>
            </div>
            <p className='bg-teal text-center py-3'><Link className='font-normal text-gray-50 hover:font-bold ' to='/signup'>Forgot Password?</Link></p>
            <p className='text-center bg-teal text-gray-50  pb-5 shadow-md shadow-teal'>Don't have an account? 
                <Link className='font-normal ml-2 text-yellow-500  mb-3 hover:font-bold ' to='/signup'>Sign Up</Link>
                <br/>
            </p>
        </div> 
    </div>
  )
}

export default SignUpForm



// return (
//     <div className='sign-up flex flex-col bg-slate-50 w-full h-screen'>
//         <div className='title w-40 flex justify-center mx-auto mt-6'>
//             <h3 className='text-yellow-500 text-2xl '>Sign In</h3>
//         </div>
        
//         <div className='form bg-teal w-40 h-3/6  my-4 mx-auto '>
//             <form className='w-full h-full flex flex-col justify-evenly shadow-md shadow-teal rounded-one'>

//                 <div className='email'>
//                     {/* <label className='text-gray-50 ml-2'>Email Address</label> */}
//                     <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
//                         border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500 placeholder-gray-50'  
//                         type="text" name="lastname" placeholder="Enter your Email" 
//                     />
//                 </div>

//                 <div className='password'>
//                     {/* <label className='text-gray-50 ml-2'>Password</label> */}
//                     <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
//                         border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500 placeholder-gray-50' 
//                         type="password" name="password1" placeholder="Password"
//                     />
//                 </div>

//                 <button className='bg-yellow-500 w-11/12 my-3 ml-1 p-2 text-gray-50 text-widest font-bold
//                 hover:shadow-md hover:tracking-widest hover:shadow-yellow-500' type='submit'>Sign In</button>


//             </form>
//             <div className='others bg-teal w-full'>
//                 <h4 className='text-center text-gray-50'>Or sign in with:</h4>
//                 <div className='flex justify-center items-center'>
//                     <i class="fa fa-google-plus text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
//                      hover:bg-gray-50 hover:text-teal"></i>
//                     <i class="fa fa-facebook text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
//                     hover:bg-gray-50 hover:text-teal"></i>
//                     <i class="fa fa-pinterest text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
//                     hover:bg-gray-50 hover:text-teal "></i>
                   
//                 </div>
//             </div>
//             <p className='bg-teal text-center py-3'><Link className='font-normal text-gray-50 hover:font-bold ' to='/signup'>Forgot Password?</Link></p>
//             <p className='text-center bg-teal text-yellow-500 pb-5 shadow-md shadow-teal'>Don't have an account? 
//                 <Link className='font-normal ml-2 text-gray-50 mb-3 hover:font-bold ' to='/signup'>Sign Up</Link>
//                 <br/>
//             </p>
//         </div> 
//     </div>
//   )