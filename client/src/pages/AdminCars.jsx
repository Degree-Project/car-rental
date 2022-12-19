import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DeleteCar } from "../components";
import { BASE_URL } from '../utils/utils';
import AuthContext from '../context/AuthContext';


export const AdminCars = () => {
  const [cars, setCars] = useState();
  const {loading} = useContext(AuthContext);

  const getCars = () => {
    axios.get(`${BASE_URL}/car/getCars`).then((res) => {
      setCars(res.data.data);
    })
  }

  useEffect(() => {
    getCars();
  },[loading])

  return (
    <div className="cars-container px-2 pt-5 bg-light mb-5">
      <div className="container">
        <h3 className="page-title text-center fw-bold mb-4">All Car</h3>
        {
          cars ? cars.map((car) => (
            <DeleteCar key={car.carId} {...car} />
          )): <Spinner animation="border" variant="success" />
        }
      </div>
    </div>
  );
};