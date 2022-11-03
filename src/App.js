import Login from './Components/Login';
import Home from './Components/Home';
import Authenticate from './Components/Authenticate';
import { useAuth } from './Context/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
function App () {
    const { isAuthenticated } = useAuth();
    return ( 
        <Routes>
          <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/"/> : <Authenticate/>} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <Login/>} />
          <Route path="/" element={isAuthenticated ? <Home/> : <Navigate to="/login"/>} />
        </Routes>
    );
}

export default App ;