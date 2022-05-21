import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SignUpForm = () => {

    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password1: "",
        password2: ""
    })
    
    const handleUserInput = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const registerUser = (e)=>{
        e.preventDefault()
        const {firstname, lastname, username,email,password1,password2} = user
        if (firstname && lastname && username && email && password1 && password2){
            axios({
                method: 'POST',
                url: 'http://localhost:8000/auth/signup/',
                data: user
            }) 
            setError(false) 
            resetForm()
        }
        
        else{
            setError(true)
        }
    };

    const resetForm = () =>{
        setUser('')  
    }

    


  return (
    <div className='sign-up flex flex-col bg-slate-50 w-full h-full-screen pb-4 '>
        <div className='title w-full flex justify-center mx-auto mt-6 md:w-40'>
            <h3 className='text-yellow-500 text-2xl '>Create An Account</h3>
        </div>
        
        <div className='form bg-teal w-11/12 h-screen my-4 mx-auto md:w-40'>

            {
                error ?
                    <div className='error w-3/6 mx-auto my-0 bg-gray-50 text-red-400 font-bold rounded-one text-center'>
                        <i class="far fa-times-circle font-bold text-red-400 mr-3"></i>Please Fill all the Fields
                    </div>
                :
                <div className='opacity-0'></div>
            }
            
            <form className='w-full h-full flex flex-col justify-between shadow-md shadow-teal rounded-one' 
                onSubmit={registerUser}>
                <div className='firstname'>
                    <label className='text-gray-50 ml-2'>First Name</label>
                    <input className='w-11/12 my-0 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="text"
                        name="firstname" value={user.firstname || ""} onChange={handleUserInput}
                    />
                </div>

                 <div className='lastname'>
                    <label className='text-gray-50 ml-2'>Last Name</label>
                    <input className='w-11/12 my-0 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="text"
                        name="lastname" value={user.lastname || ""} onChange={handleUserInput}
                    />
                </div>

                <div className='username'>
                    <label className='text-gray-50 ml-2'>Userame</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500'  type="text" 
                        name="username" value={user.username || ""} onChange={handleUserInput}
                    />
                </div>

                <div className='email'>
                    <label className='text-gray-50 ml-2'>Email Address</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500'  type="text" 
                        name="email" value={user.email || ""} onChange={handleUserInput}
                    />
                </div>

                <div className='password1'>
                    <label className='text-gray-50 ml-2'>Password</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="password"
                        name="password1" value={user.password1 || ""} onChange={handleUserInput}
                    />
                </div>

                 <div className='password2'>
                    <label className='text-gray-50 ml-2'>Confirm Password</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="password"
                        name="password2" value={user.password2 || ""} onChange={handleUserInput}
                    />
                </div>

                <button className='bg-yellow-500 w-11/12 my-3 mx-auto p-2 text-gray-50 text-widest font-bold
                hover:shadow-md hover:tracking-widest hover:shadow-yellow-500' type='submit'>Sign Up</button>


            </form>
            <div className='others mt-3 w-full'>
                <h4 className='text-center text-teal'>Or sign up with:</h4>
                <div className='flex justify-center items-center'>
                    <i className="fa fa-google-plus text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                    hover:bg-teal hover:text-gray-50"></i>
                    <i className="fa fa-facebook text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                    hover:bg-teal hover:text-gray-50"></i>
                    <i className="fa fa-pinterest text-gray-50 w-8 h-8 bg-yellow-500 rounded-circle p-2 my-2 mr-2
                    hover:bg-teal hover:text-gray-50 "></i>
                   
                </div>
            </div>
            <p className='text-center text-teal mb-4'>Already have an account? 
                <Link className='font-normal ml-2 text-yellow-500  hover:font-bold' to='/login'>Login</Link>
            </p>
        </div>
    </div>
  )
}

export default SignUpForm
