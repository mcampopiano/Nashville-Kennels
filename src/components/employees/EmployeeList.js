import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import "./Employee.css"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getEmployees)
    }, [])

    return (
        <div className="employees">
            {
                employees.map(empl => {
                    const location = locations.find(loc => loc.id === empl.locationId)
                    return <Employee key={empl.id} employee={empl} location={location} />
                }
                
                )
            }
        </div>
    )
}