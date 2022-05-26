import {React, useEffect} from 'react'
import axiosInstance from '../Axios'
import { useNavigate } from 'react-router-dom'

function LogOut() {

    const navigate = useNavigate()
    useEffect(() => {
        const response = axiosInstance.post('logout/',{
            refresh_token: localStorage.getItem('refresh_token'),
        })
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/login')


    })
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default LogOut