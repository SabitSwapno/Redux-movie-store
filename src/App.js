import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Finishedlist from './Pages/Activity/Finishedlist';
import Wacthlist from './Pages/Activity/Wacthlist';
import AuthProvider from './Pages/Contexts/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/home" element={<PrivateRoute>
              <Home></Home>
            </PrivateRoute>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/finishedlist" element={<PrivateRoute>
              <Finishedlist></Finishedlist>
            </PrivateRoute>} />
            <Route path="/watchlist" element={<PrivateRoute>
              <Wacthlist></Wacthlist>
            </PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
