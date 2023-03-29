import React from "react";
import "./BasicInfo.css"
import { useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom"

const LocationInfo = (props) => {
    const navigate = useNavigate()
    let status = ['Sold','Unsold','Unsold','Sold']
    let blueColorUrl = window.location.href
    useEffect(() => {
       
      },[blueColorUrl]);
    let PPID = 'PPD' + Math.floor(Math.random()*999 + 999)
    let Views = Math.floor(Math.random()*100);
    let Daysleft = parseInt(Math.random() * 90 + 10)
    let sold = status[Math.floor(Math.random()*status.length)];
    const [email,setemail]=useState("123");
    const [city, setcity] = useState("");
    const [area, setarea] = useState("");
    const [pincode, setpincode] = useState(0);
    const [address, setaddress] = useState("");
    const [landmark, setlandmark] = useState("");
    const [latitude, setlatitude] = useState(0);
    const [longitude, setlongitude] = useState(0);
    
    

    const insertpage3 =()=>{
        const formData = new FormData();

        formData.append("_id",localStorage.getItem("objid"));
        formData.append("email",email);
        formData.append("city", city);
        formData.append("pincode", pincode);
        formData.append("address", address);
        formData.append("landmark", landmark);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("area", area);
        formData.append('PPID',PPID);
        formData.append('views',Views);
        formData.append('daysLeft',Daysleft);
        formData.append('status',sold);


        for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
            console.log(props.property);
        fetch("https://real-estate-backend-544m.onrender.com/locationinfo",
            {
                method: 'PATCH',
                body: formData
            
            }).then(res=>res.json()).then(data=>{
                navigate('/home');
            }).catch(err=>{
                console.log("error",err);
            });
}

    return (

        <>
            <form className="formContainer" id="formContainerForLocationInfo">

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Email">Email</label>
                        <input className="WideInput" type="text" id="Email" name="Email" value={email}
                            placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} /></section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="City">City</label>
                        <select className="WideInput" type="text" id="City" name="PropertyType" value={city}
                            placeholder="Select City" onChange={(e)=>{setcity(e.target.value)}}>
                            <option value="option1" className="WideInput" >Select City</option>
                            <option value="Tier 1">Tier 1</option>
                            <option value="Tier 2">Tier 2</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Area">Area</label>
                        <input className="WideInput" type="text" id="Area" name="Area" value={area}
                            placeholder="Select Area" onChange={(e)=>{setarea(e.target.value)}}/></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="PinCode">PinCode</label>
                        <input className="WideInput" type="text" value={pincode} id="PinCode" name="PinCode" placeholder="PinCode" onChange={(e)=>{setpincode(e.target.value)}} />
                    </section>
                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Address">Address</label>
                        <select className="WideInput" type="text" id="Address" name="Address" value={address}
                            placeholder="Address" onChange={(e)=>{setaddress(e.target.value)}} >
                            <option value="option1" className="SelectNegotable" >Address</option>
                            <option value="Lane 1">Lane 1</option>
                            <option value="Lane 2">Lane 2</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Landmark">Landmark</label>
                        <select className="WideInput" type="text" id="Landmark" name="Landmark" value={landmark}
                            placeholder="Landmark" onChange={(e)=>{setlandmark(e.target.value)}}>
                            <option value="option1" className="Ownership" >Select Landmark</option>
                            <option value="Main">Main</option>
                            <option value="Street">Street</option>
                        </select>
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Latitude">Latitude</label>
                        <input className="WideInput" type="text" value={latitude} id="Latitude" name="Latitude" placeholder="Latitude" onChange={(e)=>{setlatitude(e.target.value)}} />
                    </section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Longitude"> Longitude</label>
                        <input className="WideInput" type="text" id="Longitude" value={longitude} name="Longitude" placeholder="Longitude" onChange={(e)=>{setlongitude(e.target.value)}} />
                    </section>


                </section>
            </form>

            <section className="buttons" id="buttonsForLocationInfo">
                <Link to='/display3'
                    style={{ textDecoration: "none" }}
                >    <button className="button1">Previous</button></Link>
            
                
                <button onClick={insertpage3 } className="button2">Add Property</button>


            </section>
        </>
    )
}
export default LocationInfo;
