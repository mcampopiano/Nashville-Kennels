import React, {useContext, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider"
import {Animal} from "./Animal"
import "./Animal.css"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"

export const AnimalList = (props) => {
    const {animals, getAnimals} = useContext(AnimalContext)
    const {customers, getCustomers} = useContext(CustomerContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

    return (
        <div className="animals">
            <button onClick={() => props.history.push("/animals/create")}>
                Make Appointment
            </button>
            {
                animals.map(animal => {
                    return <Animal key={animal.id} Animal={animal} />
                }
                )
            }
        </div>
    )
}