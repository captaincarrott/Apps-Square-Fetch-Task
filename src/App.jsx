import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashPage from './pages/DashPage';
import SignIn from './components/SignIn';
import ProtectedRoutes from '../my-project/src/ProtectedRoutes';
import { Navigate } from 'react-router-dom';
function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path='/Apps-Square-Fetch-Task' element={<SignIn />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/Apps-Square-Fetch-Task/DashPage' element={<DashPage />} />
      </Route>
    </Routes>
  );
}

export default App;
