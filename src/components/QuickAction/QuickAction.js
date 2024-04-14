import React from 'react'
import { UilArrow,UilTruck,UilUser,UilTruckLoading,UilCar } from "@iconscout/react-unicons";
import "../QuickAction/QuickAction.css"
const QuickAction = () => {
  return (
    <ul>
        <li>
            <a href="#">
                <div className="icon">
                    <UilArrow/>
                </div>
                <div className="name" data-text="Create Indents">Create Indents</div>
            </a>
        </li>
        <li>
            <a href="#">
                <div className="icon">
                    <UilTruck/>
                </div>
                <div className="name" data-text="Add Vehicle">Add Vehicle</div>
            </a>
        </li>
        <li>
            <a href="#">
                <div className="icon">
                    <UilCar/>
                </div>
                <div className="name" data-text="Add Trailer">Add Trailer</div>
            </a>
        </li>
        <li>
            <a href="#">
                <div className="icon">
                    <UilUser/>
                </div>
                <div className="name" data-text="Add Driver">Add Driver</div>
            </a>
        </li>
        <li>
            <a href="#">
                <div className="icon">
                    <UilTruckLoading/>
                </div>
                <div className="name" data-text="Home">Home</div>
            </a>
        </li>
    </ul>
  )
}

export default QuickAction