import { useContext, useEffect } from "react";
import React, {useState} from "react"

// currently an empty container
export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
    // creates an array called animals, sets it as empty, and creates a function, called setAnimals, that will update animals when called
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
        .then(response => response.json())
        .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
        .then(getAnimals)
    }

    return (
        <AnimalContext.Provider value={{animals, getAnimals, addAnimal}}>
            {props.children}
        </AnimalContext.Provider>
    )
}


