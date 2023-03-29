import React, { useState } from "react";
import "./BasicInfo.css"
import { Link } from "react-router-dom"
import { useEffect } from "react";

const PropertyDetails = (props) => {

    useEffect(()=>{
        dispalyproperty();
    },[localStorage.getItem("objid")])
    let blueColorUrl = window.location.href;
    const [areaUnit,setareaUnit]=useState("");
    const [noOfBhk, setnoOfBhk] = useState(0);
    const [noOfFloor, setnoOfFloor] = useState(12);
    const [attached, setattached] = useState("");
    const [westernToilet, setwesternToilet] = useState("");
    const [furnished, setfurnished] = useState("");
    const [carParking, setcarParking] = useState("");
    const [lift, setlift] = useState("");
    const [electricity, setelectricity] = useState("");
    const [facing, setfacing] = useState("");
    const [length, setlength] = useState(0);
    const [breadth, setbreadth] = useState(0);
    const [totalArea, settotalArea] = useState(0);
    useEffect(() => {
        // console.log( blueColorUrl);
    }, [blueColorUrl]);
    //const [area, setArea] = useState('')
    const handleClick = () => {
        props.onData1({ colorUrl: blueColorUrl });
    };
    const insertpage2 =()=>{
    
        
        const formData = new FormData();
        formData.append("_id",localStorage.getItem("objid"));
        formData.append("areaUnit", areaUnit);
        formData.append("noOfBhk", noOfBhk);
        formData.append("noOfFloor", noOfFloor);
        formData.append("attached", attached);
        formData.append("westernToilet",westernToilet)
        formData.append("furnished",furnished)
        formData.append("carParking",carParking)
        formData.append("lift",lift)
        formData.append("electricity", electricity)
        formData.append("facing",facing)
        formData.append("length",length)
        formData.append("breadth",breadth)
        formData.append("totalArea",totalArea)
        
        //formData.append('PPID',PPID)

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
            console.log(props.property);
        fetch("http://localhost:8080/propertydetails",
            {
                method: 'PATCH',
                body: formData
            
            }).then(res=>res.json()).then(data=>{
                
            }).catch(err=>{
                console.log("error",err);
            });
}
const dispalyproperty=()=>{
        
    fetch(`http://localhost:8080/propertydetails/${localStorage.getItem('objid')}`, {
        method: 'GET'
    }).then((res) => res.json())
        .then((data) => {
            //setResult(data.data)
            console.log("hi total arae"+data.data[0].totalArea)
            setlength(data.data[0].length)
            setbreadth(data.data[0].breadth)
            settotalArea(data.data[0].totalArea)
            setareaUnit(data.data[0].areaUnit)
            setnoOfBhk(data.data[0].noOfBhk)
            setnoOfFloor(data.data[0].noOfFloor)
            setattached(data.data[0].attached)
            setwesternToilet(data.data[0].westernToilet)
            setfurnished(data.data[0].furnished)
            setcarParking(data.data[0].carParking)
            setlift(data.data[0].lift)
            setelectricity(data.data[0].electricity)
            setfacing(data.data[0].facing)
        }
            )
        .catch((err) => console.log(err))

}

    return (

        <>
            <form className="formContainer" id="formContainerForPropertyDetails"  >

                <section className="column">

                    <section className="inputSection1"> <label className="WideLabel" htmlFor="Length">Length</label>
                        <input className="WideInput" type="number" id="Length" name="Length"
                            placeholder="Length" value={length} onChange={(e) => { setlength(e.target.value) }}/></section>
                    <section className="inputSection"> <label className="WideLabel" htmlFor="TotalArea">Total Area</label>
                        <input className="WideInput" type="number" id="TotalArea" name="TotalArea"
                            placeholder="Total Area" onChange={(e) => { settotalArea(e.target.value) }} value={totalArea} />
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="NoOfBHK">No of BHK</label>
                        <select className="WideInput" type="text" id="NoOfBHK" name="NoOfBHK"
                            placeholder="No of BHK"  value={noOfBhk} onChange={(e) => { setnoOfBhk(e.target.value) }} >
                            <option value="NoOfBHK" className="WideInput" >No of BHK</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="Attached">Attached</label>
                        <select className="WideInput" type="text" id="Attached" name="Attached" value={attached}
                            placeholder="Select Attached" onChange={(e) => { setattached(e.target.value) }}>
                            <option value="Select Attached" className="WideInput" >Select Attached</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="Furnished">Furnished</label>
                        <select className="WideInput" type="text" id="Furnished" name="Furnished" value={furnished}
                            placeholder="Furnished" onChange={(e) => { setfurnished(e.target.value) }}>
                            <option value="Furnished" className="WideInput" >Furnished</option>
                            <option value="option2">YES</option>
                            <option value="option3">NO</option>
                        </select>
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="Lift">Lift</label>
                        <select className="WideInput" type="text" id="Lift" name="Lift" value={lift}
                            placeholder="Lift" onChange={(e) => { setlift(e.target.value) }}>
                            <option value="Lift" className="WideInput" >Lift</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="Facing">Facing</label>
                        <select className="WideInput" type="text" id="Facing" name="Facing" value={facing}
                            placeholder="Facing" onChange={(e) => { setfacing(e.target.value) }} >
                            <option value="NoOfBHK" className="WideInput" >Facing</option>
                            <option value="NORTH">NORTH</option>
                            <option value="EAST">EAST</option>
                        </select>
                    </section>


                </section>

                <section className="column">
                    <section className="inputSection1"> <label className="WideLabel" htmlFor="Breath">Breadth</label>
                        <input className="WideInput" type="number" id="Breath" name="Breath" value={breadth}
                            placeholder="Breath" onChange={(e) => { setbreadth(e.target.value) }}/></section>

                    <section className="inputSection1"> <label className="WideLabel" htmlFor="Area Unit ">Area Unit </label>
                        <select className="WideInput" type="text" id="Area Unit " name="Area Unit " value={areaUnit}
                            placeholder="Area Unit " onChange={(e) => { setareaUnit(e.target.value) }} >
                            <option value="Area Unit " className="SelectNegotable" >Area Unit </option>
                            <option value="sq.ft">Sq.ft</option>
                            <option value="sq.mt">sq.mt</option>
                        </select>
                    </section>
                    <section className="inputSection1"><label className="WideLabel" htmlFor="NoOfFloor">No of Floor</label>
                        <select className="WideInput" type="text" id="NoOfFloor" name="NoOfFloor" value={noOfFloor}
                            placeholder="NoOfFloor" onChange={(e) => { setnoOfFloor(e.target.value) }} >
                            <option value="NoOfFloor" className="NoOfFloor" >No of Floor</option>
                            <option value="2">2</option>
                            <option value="">3</option>
                        </select>
                    </section>
                    <section className="inputSection1"> <label className="WideLabel" htmlFor="WesternToilet">Western Toilet</label>
                        <select className="WideInput" type="text" id="WesternToilet" name="WesternToilet" value={westernToilet}
                            placeholder="WesternToilet" onChange={(e) => { setwesternToilet(e.target.value) }} >
                            <option value="WesternToilet" className="WesternToilet" >Western Toilet</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>
                    <section className="inputSection1">
                        <label className="WideLabel" htmlFor="CarParking">Car Parking</label>
                        <select className="WideInput" type="text" id="CarParking" name="CarParking"
                            placeholder="Car Parking" value={carParking} onChange={(e) => { setcarParking(e.target.value) }}>
                            <option value="option1" className="CarParking">Car Parking</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </section>

                    <section className="inputSection1"> <label className="WideLabel" htmlFor="Electricity">Electricity</label>
                        <input className="WideInput" type="number" id="Electricity" name="Electricity" value={electricity}
                            placeholder="Electricity" onChange={(e) => { setelectricity(e.target.value) }}/></section>
                </section>
            </form>

            <section className="buttons" id="buttonsForPropertyDetails">
                <Link to='/display'>    <button onClick={handleClick} className="button1">Previous</button></Link>
                <Link to='/display3'> <button onClick={insertpage2} className="button2">Save & Continue</button></Link>

            </section>
        </>
    )
}
export default PropertyDetails;