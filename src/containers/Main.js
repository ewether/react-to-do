import React, { useState, useEffect, Component } from "react";
import AllToDos from '../components/AllToDos'
import ToDo from '../components/ToDo'

function Main() {
    return (
        <>
            <AllToDos />
            <section className="todos-wrapper">
                {/* <ToDo /> */}
            </section>
        </>
    )
}

export default Main;