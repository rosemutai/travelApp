import { useReducer, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './components/Home'
import SignUpForm from './routes/SignUpForm';
import LoginForm from './routes/LoginForm';
import LogOut from './routes/LogOut';
import Explore from './routes/Explore'
import AboutUs from './routes/AboutUs';
import Contact from './routes/Contact';
import Profile from './routes/Profile';
//import UserContext from './components/User';
export const AuthContext = createContext()


const initialState = {
  isAuthenticated: false,
  //username: null,
  access_token: null,
  refresh_token: null
}


const reducer = (state, action) =>{

  switch (action.type){
    case "LOGIN":
      //localStorage.setItem('username', JSON.stringify(action.payload.config.data.username))
      localStorage.setItem('access_token', JSON.stringify(action.payload.access))
      localStorage.setItem('refresh_token', JSON.stringify(action.payload.refresh))
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        refresh_token: action.payload.refresh_token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        // username: null
      }

    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App w-full h-full bg-slate-50">

      <AuthContext.Provider 
        value={{
          state,
          dispatch
        }}>

        <BrowserRouter >
          <Routes>
            <Route path='/safiriapp' element={<Home/>} ></Route>

            {state.isAuthenticated ? 
              <Route path='/logout' element={<LogOut />}></Route>
            :
              <>
                <Route path='/signup' element={<SignUpForm/>}></Route>
                <Route path='/login' element={<LoginForm/>}></Route>
              </>
            
            }
            
            <Route path='/explore' element={<Explore />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            
          </Routes>
        </BrowserRouter>
       {/* body: #EFFFFD */}
      </AuthContext.Provider>
    </div>
  );
}




export default App;
