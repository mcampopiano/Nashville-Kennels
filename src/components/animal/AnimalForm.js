import React, { useEffect, useContext, useRef } from "react"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext, LocationProvider } from "../locations/LocationProvider"
import { AnimalContext, AnimalProvider } from "./AnimalProvider"

export const AnimalForm = (props) => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const createAppointment = () => {
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer"))
            })
                .then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name:</label>
                    <input type="text" id="animalName" ref={name} className="form-control"></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal Breed:</label>
                    <input type="text" id="animalBreed" ref={breed} className="form-control"></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalLocation">Location:</label>
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
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    createAppointment()
                }}
                className="btn btn-primary">
                Save appointment
            </button>
        </form>
    )
}