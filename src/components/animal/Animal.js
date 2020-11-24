import React from "react"
import "./Animal.css"

export const Animal = ({ Animal, Owner, Location }) => (
    <section className="animal">
        <h3 className="animal__name">{Animal.name}</h3>
        <div className="animal__breed">{Animal.breed}</div>
        <div className="animal__owner">Customer: {Owner.name}</div>
        <div className="animal__location">Location: {Location.name}</div>
    </section>
)