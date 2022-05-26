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

function App() {
  return (
    <div className="App w-full h-full bg-slate-50">
      <BrowserRouter >
         <Routes>
          <Route path='/safiriapp' element={<Home/>} ></Route>
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/logout' element={<LogOut />}></Route>
          <Route path='/explore' element={<Explore />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          
        </Routes>
      </BrowserRouter>
       {/* body: #EFFFFD */}
    </div>
  );
}




export default App;
