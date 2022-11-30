import { Navbar, Footer, ProtectedRoute } from './components';
import { Home, Login, Signup, AllCars, RentCar } from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/cars" element={<AllCars/>} />
    </Routes>
    {/* <Footer /> */}
  </div>;
}

export default App;
