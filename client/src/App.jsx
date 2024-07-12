
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Homepage/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/SignUp.jsx'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser}= useAuthContext();

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
      <Toaster/>
         <Routes>
          <Route path="/" element={authUser ? <Home />:< Navigate to={"/login"}/>} />
          <Route path="/login" element={authUser ? < Navigate to="/"/>:<Login />} />
          <Route path="/signup" element={authUser ? < Navigate to="/"/>:<Signup/>} />
         </Routes>
      
      </div>
    </>
  )
}

export default App
