import { Navbar, Footer } from './components';
import { Home, Login, Signup, AllCars, RentCar } from './pages'
import { Route, Routes } from 'react-router-dom';

function App() {
  return <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </div>;
}

export default App;
