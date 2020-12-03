import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerContext, CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeDetail } from "./employees/EmployeeDetail"
import { LocationDetail } from "./locations/LocationDetail"
import { AnimalDetails } from "./animal/AnimalDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = (props) => {
    return (
        <>
            <EmployeeProvider>
                <CustomerProvider>
                    <AnimalProvider>
                        <LocationProvider>
                            {/* Render the location list when http://localhost:3000/ */}
                            <Route exact path="/">
                                <LocationList />
                            </Route>

                            <Route path="/locations/:locationId(\d+)" render={
                                props => <LocationDetail {...props} />
                            } />
                        </LocationProvider>
                    </AnimalProvider>
                </CustomerProvider>
            </EmployeeProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <>
                                <AnimalSearch />
                                <AnimalList {...props} />
                            </>
                        } />
                        <Route path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route path="/customers">
                            <CustomerList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
                <LocationProvider>
                    <EmployeeProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />

                    </EmployeeProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}