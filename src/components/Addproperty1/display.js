import React, { useEffect } from 'react';
import "./display.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import ProgressBar from '../dashboard/progressBar';
import BasicInfo from '../dashboard/basicPage';

const Display = (props) => {
    const handleChildData2 = (data)=>{
        props.onData2({ property: data.property });
    }
    console.log(props.objectid);
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <div className='dashboard'>
                <ProgressBar/>
                <BasicInfo onData2={handleChildData2} />
                </div>
            </div>

        </div>

    )
}
export default Display;