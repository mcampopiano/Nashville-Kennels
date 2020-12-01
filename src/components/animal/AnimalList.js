import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
    const { animals, searchTerms, getAnimals } = useContext(AnimalContext)

    /*
        Since you are no longer ALWAYS going to be displaying all animals
    */
    const [ filteredAnimals, setFiltered ] = useState([])

    useEffect(() => {
        getAnimals()
    }, [])

    /*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */
    useEffect(() => {
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} Animal={animal} />
                    })
                }
            </div>
        </>
    )
}




// import React, {useContext, useEffect} from "react"
// import {AnimalContext} from "./AnimalProvider"
// import {Animal} from "./Animal"
// import "./Animal.css"
// import { CustomerContext } from "../customers/CustomerProvider"
// import { LocationContext } from "../locations/LocationProvider"

// export const AnimalList = (props) => {
//     const {animals, getAnimals} = useContext(AnimalContext)
//     const {customers, getCustomers} = useContext(CustomerContext)
//     const {locations, getLocations} = useContext(LocationContext)

//     useEffect(() => {
//         getLocations()
//         .then(getCustomers)
//         .then(getAnimals)
//     }, [])

//     return (
//         <div className="animals">
//             <button onClick={() => props.history.push("/animals/create")}>
//                 Make Appointment
//             </button>
//             {
//                 animals.map(animal => {
//                     return <Animal key={animal.id} Animal={animal} />
//                 }
//                 )
//             }
//         </div>
//     )
// }