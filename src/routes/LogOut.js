import {React, useEffect, useContext} from 'react'
import axiosInstance from '../Axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

function LogOut() {

    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
   
    useEffect(() => {
        axiosInstance.post('logout/')
        .then(res =>{
            console.log(res)
            dispatch({
                type: "LOGOUT",
                payload: res.data
            })
            navigate('/login')
        })

    })
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default LogOut










// function LogOut() {

//     const navigate = useNavigate()
//     useEffect(() => {
//         const response = axiosInstance.post('logout/',{
//             refresh_token: localStorage.getItem('refresh_token'),
//         })
//         localStorage.removeItem('access_token');
//         localStorage.removeItem('refresh_token');
//         axiosInstance.defaults.headers['Authorization'] = null;
//         navigate('/login')


//     })
//     return (
//         <div>
//             <h2>Logout</h2>
//         </div>
//     )
// }