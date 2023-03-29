import React, { useEffect } from 'react';
import "./display.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import ProgressBar from '../dashboard/progressBar';
import PropertyDetails from '../dashboard/propertyPage';

const Display2 = (props) => {
    const handleChildData1 = (data)=>{
        props.onData1({ area: data.area });
    }
    //console.log(props.objectid);
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <div className='dashboard'>
                <ProgressBar/>
                <PropertyDetails onData1={handleChildData1}/>
                </div>
            </div>

        </div>

    )
}
export default Display2;