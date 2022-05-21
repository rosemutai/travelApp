import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar'

const Contact = () => {

    const [name, setName] =  useState("");
    const [email, setEmail] =  useState("");
    const [subject, setSubject] =  useState("");
    const [message, setMessage] =  useState("");

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleSubject = (e) =>{
        setSubject(e.target.value)
    }


    const handleMessage = (e) =>{
        setMessage(e.target.value)
    }

    const contactUs = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/contact')
        .then((res) =>{console.log(res.data)})

    }


  return (
    <div className='w-full h-full bg-slate-50 md:relative'>
        <NavBar />
        <div className='sign-up flex flex-col bg-slate-50 w-full h-full-screen pb-4 '>
        <div className='title w-full flex justify-center mx-auto mt-16 md:mt-28 md:w-40'>
            <h3 className='text-yellow-500 text-2xl '>Contact us</h3>
        </div>
        
        <div className='form bg-teal w-11/12 h-5/6  my-4 mx-auto md:w-5/12'>
            <form className='w-full h-full flex flex-col justify-between shadow-md 
                shadow-teal rounded-one' onSubmit={contactUs}>
                <div className='fullname'>
                    <label className='text-gray-50 ml-2'>Name</label>
                    <input className='w-11/12 my-0 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="text"
                        name="name" value={name} onChange={handleName}
                    />
                </div>

                <div className='email'>
                    <label className='text-gray-50 ml-2'>Email Address</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500'  type="text" 
                        name="email" value={email} onChange={handleEmail}
                    />
                </div>

                <div className='password1'>
                    <label className='text-gray-50 ml-2'>Subject</label>
                    <input className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="text"
                        name="subject" value={subject} onChange={handleSubject}
                    />
                </div>

                 <div className='message'>
                    <label className='text-gray-50 ml-2'>Message</label>
                    <textarea className='w-11/12 mx-auto p-2 focus:outline-none bg-teal text-gray-50
                        border-b-2 border-yellow-500 hover:shadow hover:shadow-yellow-500' type="text"
                        name="message" value={message} onChange={handleMessage}
                    />
                </div>

                <button className='bg-yellow-500 w-11/12 my-3 mx-auto p-2 text-gray-50 text-widest font-bold
                hover:shadow-md hover:tracking-widest hover:shadow-yellow-500' type='submit'>Submit</button>


            </form>

        </div>
    </div>

    </div>
  )
}

export default Contact