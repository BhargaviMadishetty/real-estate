import React, { useEffect } from 'react';
import "./display.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import ProgressBar from '../dashboard/progressBar';
import LocationInfo from '../dashboard/locationPage';
import GeneralInfo from '../dashboard/generalPage';

const Display3 = (props) => {
    const handleChildData = (data)=>{
        props.onData({ contact: data.contact });
    }
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <div className='dashboard'>
                <ProgressBar/>
                <GeneralInfo onData={handleChildData}/>
                </div>
            </div>

        </div>

    )
}
export default Display3;