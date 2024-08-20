import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
// import AboutUs from './pages/AboutUs';
// import OurProducts from './pages/OurProducts';
// import Services from './pages/Services';


function App() {
return (
  <HashRouter basename='/Apps-Square-Fetch-Task'>
  <Routes>
    <Route path='/Apps-Square-Fetch-Task' element={<Home />}/>
    <Route path='/Apps-Square-Fetch-Task/SignUp' element={<SignUp />}/>
  </Routes>
  </HashRouter>
  )
}

export default App
