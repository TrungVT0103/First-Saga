import Button from '@mui/material/Button/Button';
import NotFound from 'components/Common/NotFound';
import PrivateRouter from 'components/Common/PrivateRoute';
import Admin from 'components/Layout/Admin';
import { authActions } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import Dashboard from 'features/dashboard';
import Student from 'features/student';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import privateRoute from 'utils/CommonRouter';
import './App.css';

function App() {
  const dispatch = useDispatch()
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin' element={privateRoute(<Admin />)}>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/student' element={<Student />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
