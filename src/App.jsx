import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './store/auth/userSlice';
import Auth from './pages/Auth';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import SignIn from './components/SignIn';
// import AboutUs from './pages/AboutUs';
// import OurProducts from './pages/OurProducts';
// import Services from './pages/Services';


function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('email'));

    if (token && email) {
      dispatch(loginSuccess({ email, token }));
    }
  }, [dispatch]);



return (
  <Routes basename="Apps-Square-Fetch-Task">
    <Route path='/Apps-Square-Fetch-Task' element={isAuthenticated ? <Home /> : <SignIn />}/>
    <Route path='/Apps-Square-Fetch-Task/Auth' element={<Auth />}/>
  </Routes>
  )
}

export default App
