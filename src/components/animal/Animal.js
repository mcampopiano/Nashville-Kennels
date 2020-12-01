import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const Animal = ({ Animal, Owner, Location }) => (
    <section className="animal">
        <Link to={`/animals/${Animal.id}`}>
                { Animal.name }
            </Link>
        <h4 className="animal__breed">{Animal.breed}</h4>
    </section>
)