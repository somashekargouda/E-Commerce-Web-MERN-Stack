import React from 'react'
import Navbar from "./Navbar"

const Base = ({
    title = "My Title",
    description = "My Description",
    className = "bg-dark text-white p-0",
    children
}) => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
            <div className = "jumbotron bg-dark text-white text-center" >
                <h2 className="display-4">{title} </h2>
                <p className="lead"> {description} </p>
            </div>
            <div className={className}> {children} </div>
            </div>

            <footer className="footer bg-dark mt-auto py-0">
                <div className="container-fluid bg-success text-white text-center py-0">
                    <h4> If u got any questions feel free to ask us</h4>
                    <button className="btn btn-warning btn-sm">Contact us</button>
                </div>

                <div className="container text-center">
                <span className="text-muted">
                    An Amazing <span className="text-white"> T-shirt     </span> Store
                </span>
                </div>
            </footer>
    


        </div>
    )
}
export default Base;
