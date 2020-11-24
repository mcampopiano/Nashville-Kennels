import React, {useContext, useEffect} from "react"
import {CustomerContext} from "./CustomerProvider"
import {Customer} from "./Customer"
import "./Customer.css"
import { AnimalContext } from "../animal/AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"

export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)
    const {animals, getAnimals} = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getAnimals)
        .then(getCustomers)
    }, [])

    return (
        <div className="customers">
            {
                customers.map(customer => {
                    const pet = animals.find(pet => pet.customerId === customer.id)
                    console.log("pet: ", pet, "animals: ", animals)
                    const location = locations.find(loc => loc.id === pet.locationId)
                   return <Customer key={customer.id} Customer={customer} Pet={pet} Location={location}/>
                } 
                )
            }
        </div>
    )
}