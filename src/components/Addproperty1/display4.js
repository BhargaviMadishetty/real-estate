import React, { useEffect } from 'react';
import "./display.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import ProgressBar from '../dashboard/progressBar';
import LocationInfo from '../dashboard/locationPage';

const Display4 = (props) => {
    let property = props.property;
    let area = props.area;
    let contact = props.contact
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <div className='dashboard'>
                <ProgressBar/>
                <LocationInfo  property={property} area={area} contact={contact}/>
                </div>
            </div>

        </div>

    )
}
export default Display4;