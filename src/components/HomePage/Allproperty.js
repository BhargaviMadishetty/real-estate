import React, { useEffect, useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MdPhotoLibrary, MdModeEdit } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

const AllpropertyList = () => {

    const [arr, setArr] = useState('')
    const [result, setResult] = useState([])
    useEffect(() => {
        alldata()
    }, [])
    const alldata = () => {
        fetch(`https://real-estate-backend-544m.onrender.com/pagelist`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => setResult(data.data))
            .catch((err) => console.log(err))
    }

    const handleSearch = () => {
        fetch(`https://real-estate-backend-544m.onrender.com/pagelist/${arr}`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((data) => setResult(data.data))
            .catch((err) => console.log(err))
    }

    return (

        <div className="dashboard">
            <div className="search-addProperty">
                <span className="search-bar">
                    <input className="search-input" type="text" placeholder="search PPD ID" onChange={(e) => { setArr(e.target.value) }} />
                    <span className="border-left-line" onClick={handleSearch} ><HiSearch className='search-icon' /></span>
                </span>
                <Link to={"/display"}
                    style={{ textDecoration: "none" }}
                >
                    <button className="add-btn">+ Add Property</button>
                </Link>
            </div>
            <div className="property-lists" >
                <table>
                    <thead>
                        <tr>
                            <td>PPD ID</td>
                            <td>Image</td>
                            <td>Property</td>
                            <td>Contact</td>
                            <td>Area</td>
                            <td>View</td>
                            <td>Status</td>
                            <td>Daysleft</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody id="scrollbox">
                        {result.map((data, i) => {
                            return (

                                <tr key={i} >
                                    <td>{data.PPID}</td>
                                    <td className="gray-color"><MdPhotoLibrary /></td>
                                    <td>{data.propertyType}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.totalArea}</td>
                                    <td>{data.views}</td>
                                    <td><button className="action-btn"   >
                                        {data.status}
                                    </button></td>
                                    <td >{data.daysLeft}</td>
                                    <td><span className="gray-color action"><HiEye className="view-icon" /><MdModeEdit /></span></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>


            </div>
        </div>
    )

}
export default AllpropertyList
