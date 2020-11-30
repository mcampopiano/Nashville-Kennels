import React, {useEffect, useContext, useRef} from "react"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext, LocationProvider } from "../locations/LocationProvider"
import { AnimalContext, AnimalProvider } from "./AnimalProvider"

export const AnimalForm = (props) => {
    const {addAnimal} = useContext(AnimalContext)
    const {locations, getLocations} = useContext(LocationContext)
    const {customers, getCustomers} = useContext(CustomerContext)

    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)

    useEffect(() => {
        getCustomers().then(getLocations)
    }, [])

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalLocation">Animal name:</label>
                    <select type="text" id="animalLocation" ref={location} className="form-control">
                        <option value="0">Select a location</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name:</label>
                    <input type="text" id="animalName" ref={name} className="form-control"></input>
                </div>
            </fieldset>
        </form>
    )
}