import React from "react";
import "./BasicInfo.css"
import { useEffect } from "react";

import { Link } from "react-router-dom"
import { useState } from "react";
const GeneralInfo = (props) => {
    const [contact, setcontact] = useState("")
    const [name,setname]=useState("");
    const [postedBy, setpostedBy] = useState("");
    const [featuredPackage, setfeaturedPackage] = useState("");
    const [ppdPackage, setppdPackage] = useState(0);
    const [saleType, setsaleType] = useState("");
    
    const handleClick = () => {
        props.onData({ colorUrl:blueColorUrl });
      
    };
    const insertpage3 =()=>{
        const formData = new FormData();
        
        formData.append("_id",localStorage.getItem("objid"));
        formData.append("contact",contact);
        formData.append("name", name);
        formData.append("postedBy", postedBy);
        formData.append("featuredPackage", featuredPackage);
        formData.append("ppdPackage", ppdPackage);
        formData.append("saleType", saleType);
        //formData.append('PPID',PPID)
        console.log(formData);
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
            console.log(props.property);
        fetch("https://real-estate-backend-544m.onrender.com/generalinfo",
            {
                method: 'PATCH',
                body: formData
            
            }).then(res=>res.json()).then(data=>{
                
                
            }).catch(err=>{
                console.log("error",err.message);
            });
}
const dispalygeneral=()=>{
        
    fetch(`https://real-estate-backend-544m.onrender.com/generalinfo/${localStorage.getItem('objid')}`, {
        method: 'GET'
    }).then((res) => res.json())
        .then((data) => {
            //setResult(data.data)
            setname(data.data[0].name)
            setpostedBy(data.data[0].postedBy)
            setfeaturedPackage(data.data[0].featuredPackage)
            setcontact(data.data[0].contact)
            setsaleType(data.data[0].saleType)
            setppdPackage(data.data[0].ppdPackage)
            
        }
            )
        .catch((err) => console.log(err))

}
    let blueColorUrl = window.location.href

    useEffect(()=>{
        dispalygeneral();
    },[localStorage.getItem("objid")])
    return (
        <>
            <form className="formContainer" id="formContainerForGeneralInfo">

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Name">Name</label>
                        <select className="WideInput" type="text" id="Name" name="Name"
                            placeholder="Name" value={name}  onChange={(e)=>{setname(e.target.value)}}>
                            <option value="Name" className="WideInput" >Name</option>
                            <option value="User">User</option>
                            <option value="Other User">Other User</option>
                        </select>
                    </section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PostedBy">Posted by</label>
                        <select className="WideInput" type="text" id="PostedBy" value={postedBy} name="PostedBy"
                            placeholder="Posted By" onChange={(e)=>{setpostedBy(e.target.value)}}>
                            <option value="PostedBy" className="WideInput" >Posted By</option>
                            <option value="Owner">Owner</option>
                            <option value="Broker">Broker</option>
                        </select>
                    </section>


                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="FeaturedPackage">FeaturedPackage</label>
                        <select className="WideInput"  value={featuredPackage} type="text" id="FeaturedPackage" name="FeaturedPackage"
                            placeholder="Featured Package" onChange={(e)=>{setfeaturedPackage(e.target.value)}}>
                            <option value="FeaturedPackage" className="WideInput" >Featured Package</option>
                            <option value="3L">3L</option>
                            <option value="2L">2L</option>
                        </select>
                    </section>
                </section>
                <section className="column">

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Mobile">Mobile</label>
                        <input className="WideInput" type="number" id="Mobile" name="Mobile" value={contact}
                            placeholder="Enter Mobile no." onChange={(e)=>{setcontact(e.target.value)}} /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="SaleType">SaleType</label>
                        <select className="WideInput" type="text" id="SaleType" name="SaleType"
                            placeholder="Sale Type"  value={saleType} onChange={(e)=>{setsaleType(e.target.value)}}>
                            <option value="SaleType" className="SaleType" >Sale Type</option>
                            <option value="CASH">CASH</option>
                            <option value="EMI">EMI</option>
                        </select>
                    </section>

                    <section className="inputSection"><label className="WideLabel" htmlFor="PpdPackage">PPD Package</label>
                        <select className="WideInput" type="text" id="PpdPackage" name="PpdPackage" value={ppdPackage}
                            placeholder="Ppd Package" onChange={(e)=>{setppdPackage(e.target.value)}}>
                            <option value="PpdPackage" className="PpdPackage" >PpdPackage</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </section>
                </section>
            </form>
            <section className="image"> <span className="vector"></span> </section>
            <section className="buttons" id="buttonsForGeneralInfo">
                <Link to='/display2'>    <button className="button1"  onClick={handleClick} >Previous</button></Link>
                <Link to='/display4'> <button className="button2"  onClick={insertpage3}  >Save & Continue</button></Link>
            </section>
        </>
    )
}
export default GeneralInfo;