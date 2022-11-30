import React from 'react'

export const CarCard = () => {
  return (
    <div className="d-flex justify-content-between px-1 rounded bg-light">
        <div className="car-details">
            <p className="car-name">
                Swift
            </p>
        </div>
        <div className="booking-details">
            <p className="price">2000/day</p>
            <button className="btn">
                Book
            </button>
        </div>
    </div>
  )
}