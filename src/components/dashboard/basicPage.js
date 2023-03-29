import React from "react";
import { useState } from 'react';
import { useEffect } from "react";

import { Link } from "react-router-dom"
import "./BasicInfo.css"
const BasicInfo = (props) => {
   // const [objectid,setobjectid]=useState("123");
    const [propertyType, setProperty] = useState("");
    const [price, setprice] = useState(0);
    const [ownership, setownership] = useState("");
    const [propertyAge, setpropertyAge] = useState(0);
    const [propertyApproved, setpropertyApproved] = useState("");
    const [propertyDescription, setpropertyDescription] = useState("");
    const [bankLoan, setbankLoan] = useState("");
    const [negotiable, setnegotiable] = useState("");
    // const handleClick = () => {
    //     props.onData2({ property: property ,colorUrl:blueColorUrl});
    // };
    useEffect(()=>{
        dispalybasic();
    },[localStorage.getItem("objid")])
    const insertpage1 =()=>{
            const formData = new FormData();
            formData.append("propertyType", propertyType);
            formData.append("price", price);
            formData.append("ownership", ownership);
            formData.append("propertyAge", propertyAge);
            formData.append("propertyApproved",propertyApproved)
            formData.append("propertyDescription",propertyDescription)
            formData.append("bankLoan",bankLoan)
            formData.append("negotiable",negotiable)
            //formData.append('PPID',PPID)
    
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
              }
                console.log(props.property);
            fetch("https://real-estate-backend-544m.onrender.com/basicinfo",
                {
                    method: 'POST',
                    body: formData
                
                }).then(res=>res.json()).then(data=>{
                    //setobjectid(data.id);
                    localStorage.setItem("objid",data.id);
                    console.log("Hi"+data.id);
                }).catch(err=>{
                    console.log("error",err);
                });
    }
    const dispalybasic=()=>{
        
            fetch(`https://real-estate-backend-544m.onrender.com/basicinfo/${localStorage.getItem('objid')}`, {
                method: 'GET'
            }).then((res) => res.json())
                .then((data) => {
                    //setResult(data.data)
                    console.log("hi display"+data.data[0].propertyType);
                    setProperty(data.data[0].propertyType)
                    setprice(data.data[0].price)
                    setownership(data.data[0].ownership)
                    setpropertyAge(data.data[0].propertyAge)
                    setpropertyApproved(data.data[0].propertyApproved)
                    setpropertyDescription(data.data[0].propertyDescription)
                    setbankLoan(data.data[0].bankLoan)
                    setnegotiable(data.data[0].negotiable)
                }
                    )
                .catch((err) => console.log(err))
        
    }
    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
      },[blueColorUrl]);

    return (

        <>
            <form className="formContainer" >

                <section className="column">
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="PropertyType">Property Type</label>
                        <select className="WideInput" type="text" id="PropertyType" name="PropertyType" 
                            placeholder="Select Property Type" onChange={(e)=>{setProperty(e.target.value)}} value={propertyType} >
                            <option value="option1" className="WideInput" >Select Property Type</option>
                            <option value="Plot">Plot</option>
                            <option value="flat">Flat</option>
                            <option value="House">House</option>
                            <option value="Other">Other</option>

                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Price">Price</label>
                        <input className="WideInput" type="text" id="Price" name="Price" value={price}
                            placeholder="Example: 10000" onChange={(e)=>{setprice(e.target.value)}}/></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyAge">Property Age</label>
                        <input className="WideInput" type="text" id="PropertyAge" name="PropertyAge" value={propertyAge}
                            placeholder="Select Property Age" onChange={(e)=>{setpropertyAge(e.target.value)}}/></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyDescription">Property Description</label>
                        <input className="WideInput" type="text" id="PropertyDescription" value={propertyDescription} name="PropertyDescription" onChange={(e)=>{setpropertyDescription(e.target.value)}}/>
                    </section>
                </section>
                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Negotable">Negotiable</label>
                        <select className="WideInput" type="text" id="Negotable" name="Negotable"
                            placeholder="Select Negotable" value={negotiable} onChange={(e)=>{setnegotiable(e.target.value)}} >
                            <option value="option1" className="SelectNegotable" >Select Negotable</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Ownership">Ownership</label>
                        <select className="WideInput" type="text" id="Ownership" name="Ownership"
                            placeholder="Ownership"  value={ownership} onChange={(e)=>{setownership(e.target.value)}}>
                            <option value="option1" className="Ownership" >Ownership</option>
                            <option value="Owner">Owner</option>
                            <option value="Broker">Broker</option>
                        </select>
                    </section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="PropertyApproved">Property Approved</label>
                        <select className="WideInput" type="text" id="PropertyApproved" name="PropertyApproved"
                            placeholder="PropertyApproved" value={propertyApproved} onChange={(e)=>{setpropertyApproved(e.target.value)}} >
                            <option value="option1" className="PropertyApproved" >Property Approved</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>
                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="BankLoan">Bank Loan</label>
                        <select className="WideInput" type="text" id="BankLoan" name="BankLoan"
                            placeholder="BankLoan" onChange={(e)=>{setbankLoan(e.target.value)}} value={bankLoan}>
                            <option value="option1" className="BankLoan" >Bank Loan</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </section>
                </section>
            </form>

            <section className="buttons">
                <Link to="/"> <button className="button1" >Cancel</button></Link> 
                <Link to='/display2'><button className="button2"  onClick={insertpage1}>Save & Continue</button></Link> 
            </section>
        </>
    )
}
export default BasicInfo;