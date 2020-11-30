import React from "react"
import "./Animal.css"

export const Animal = ({ Animal, Owner, Location }) => (
    <section className="animal">
        <h3 className="animal__name">{Animal.name}</h3>
        <h4 className="animal__breed">{Animal.breed}</h4>
        <p className="animal__owner">Customer: {Owner.name}</p>
        <p className="animal__location">Location: {Location.name}</p>
    </section>
)