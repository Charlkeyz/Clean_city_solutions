// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateAccount from './Pages/Sign-Up/SignUp'
import LandingPage from './Pages/Landing Page/LandingPage'
import AccountSetUp from './Pages/AccountSetUp/AccountSetUp'
import Log_in from './Pages/Log-in page/Log_in'
import DashBoardLandingPage from './Pages/DashBoard/DashBoardLandingPage/DashBoardLandingPage'
// import AboutUs from './Pages/AboutUsPage/AboutUs'
import ServicePage from './Pages/ServicePage/ServicePage'
// import OurPricingPage from './Pages/OurPricingPage/OurPricingPage'
 
function App() {


  return (
   <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/sign_up' element={<CreateAccount/>}/>
      <Route path='/account_setup' element={<AccountSetUp/>}/>
      <Route path='/log_in' element={<Log_in/>}/>
      {/* <Route path= '#' element={<AboutUs/>}/>
      <Route path= '#' element={<OurPricingPage/>}/> */}
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/*' element={<DashBoardLandingPage/>}/>
    </Routes>
   
   </BrowserRouter>
  )
}

export default App
