import React from "react"
import "./Customer.css"

export const Customer = ({Customer, Pet, Location}) => (
    <section className="customer">
        <h3 className="customer__name">{Customer.name}</h3>
<p className="customer__address">{Customer.address}</p>
<h4 className="customer__Pet">Pet: {Pet.name}</h4>
<p className="customer__PetLocation">Pet Location: {Location.name}</p>
    </section>
)