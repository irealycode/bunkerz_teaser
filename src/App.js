import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './code/home';
import NN from './code/404';
import Login from './code/login';
import Register from './code/register';
import Addpost from './code/addpost';
import Verify from './verify';
import Profile from './code/profile';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addpost" element={<Addpost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NN />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
