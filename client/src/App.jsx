import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, ProtectedRoute } from "./components";
import {
  Home,
  Login,
  Signup,
  AllCars,
  AdminCars,
  RentCar,
  NewCar,
  NewDriver,
  Profile,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../src/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/cars/new" element={<NewCar />} />
          <Route path="/driver/new" element={<NewDriver />} />
          <Route path="/booking/:id" element={<RentCar />} />
          <Route path="/admin/cars" element={<AdminCars />} />
        </Routes>
        <ToastContainer theme="colored" />
      </div>
    </AuthContextProvider>
  );
}

export default App;
