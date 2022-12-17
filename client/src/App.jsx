import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, ProtectedRoute } from './components';
import { Home, Login, Signup, AllCars, RentCar, NewCar } from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return <div>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/cars" element={<AllCars/>} />
        <Route path="/cars/new" element={<NewCar/>} />
        <Route path="/booking/:id" element={<RentCar/>} />
    </Routes>
    <ToastContainer theme="colored" />
  </div>
}

export default App;
