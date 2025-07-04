
import { Outlet } from 'react-router'
import './App.css'
import Navber from './components/header/Navber'
import Footer from './components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
 

  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
       <ToastContainer 
  position="top-center" 
  autoClose={5000} 
  hideProgressBar={false} 
  newestOnTop={false} 
  closeOnClick 
  rtl={false} 
  pauseOnFocusLoss 
  draggable 
  pauseOnHover 
/>

    </>
  )
}

export default App
