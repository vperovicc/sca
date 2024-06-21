import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ReturnPolicy from './pages/ReturnPolicy.jsx'
import DeliveryPolicy from './pages/DeliveryPolicy.jsx'
import TermsPolicy from './pages/TermsPolicy.jsx'


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/return' element={<ReturnPolicy/>}/>
        <Route path='/delivery' element={<DeliveryPolicy/>}/>
        <Route path='/terms' element={<TermsPolicy/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
