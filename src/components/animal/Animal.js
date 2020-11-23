import React from "react"
import "./Animal.css"

export const Animal = ({Animal}) => (
    <section className="animal">
        <h3 className="animal__name">{Animal.name}</h3>
<div className="animal__breed">{Animal.breed}</div>
    </section>
)