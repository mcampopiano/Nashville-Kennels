import React from "react"
import "./Customer.css"

export const Customer = ({Customer}) => (
    <section className="customer">
        <h3 className="customer__name">{Customer.name}</h3>
<div className="customer__address">{Customer.address}</div>
    </section>
)