import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing'
import FrontEndProjects from './components/FrontEndProjects'
import ApiSection from './components/ApiSection'
import './css/variables.css'
import './css/general.css'
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/front-end/projects" element={<FrontEndProjects/>}/>
         <Route path="/apis/projects" element={<ApiSection/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App