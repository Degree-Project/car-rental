import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CarCard } from "../components";
import { BASE_URL } from '../utils/utils';

export const AllCars = () => {
  const [cars, setCars] = useState();

  const getCars = () => {
    axios.get(`${BASE_URL}/car/getCars`).then((res) => {
      setCars(res.data.data);
    })
  }


  useEffect(() => {
    getCars();
  },[])

  return (
    <div className="cars-container px-2 pt-5 bg-light mb-5">
      <div className="container">
        <h3 className="page-title text-center fw-bold mb-4">All Car</h3>
        {
          cars ? cars.filter((car) => car.availability == 1).map((car) => (
            <CarCard key={car.carId} {...car} />
          )): <Spinner animation="border" variant="success" />
        }
      </div>
    </div>
  );
};
