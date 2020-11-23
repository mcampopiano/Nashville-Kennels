import React from "react"
import { Animal } from "./animal/Animal"
import { Customer } from "./customers/Customer"
import { Employee } from "./employees/Employee"
import "./Kennel.css"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)