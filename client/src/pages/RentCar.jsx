import React, { useState } from 'react'
import { useParams } from "react-router-dom"

export const RentCar = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  return (
    <div>

    </div>
  )
}