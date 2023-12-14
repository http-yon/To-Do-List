import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Proyect from './pages/Proyect';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/proyecto/:id' element={<Proyect />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;