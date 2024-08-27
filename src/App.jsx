import './App.css';
import Auth from './pages/Auth';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import SignIn from './components/SignIn';
// import AboutUs from './pages/AboutUs';
// import OurProducts from './pages/OurProducts';
// import Services from './pages/Services';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)
return (
  <Routes basename="Apps-Square-Fetch-Task">
    <Route path='/Apps-Square-Fetch-Task' element={isAuthenticated ? <Home /> : <SignIn />}/>
    <Route path='/Apps-Square-Fetch-Task/Auth' element={<Auth />}/>
  </Routes>
  )
}

export default App
