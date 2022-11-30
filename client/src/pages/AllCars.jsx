import { CarCard } from "../components"

export const AllCars = () => {
  return (
    <div className="cars-container container px-2 bg-warning mb-5">
      <h3 className="page-title">All Car</h3>
      <CarCard/>
    </div>
  )
}