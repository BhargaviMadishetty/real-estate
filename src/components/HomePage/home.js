import React, { useEffect } from 'react';
import AllpropertyList from './Allproperty';
import "./home.css"
import Sidebar from '../dashboard/sidebar';
import Navbar from '../dashboard/navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    // useEffect(() => {
    //     if (!token) {
    //         navigate("/pagel")
    //     }
    //     console.log(token)
    // }, [])
    return (
        <div className="home">
            <div className="side-nav">
                <Sidebar />
            </div>
            <div className="display">
                <Navbar />
                <AllpropertyList  />
            </div>

        </div>

    )
}
export default Home;