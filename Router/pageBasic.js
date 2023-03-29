const express = require("express");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const Routes1 = express.Router();

Routes1.use(bodyParser.urlencoded({ extended: false }));
Routes1.use(bodyParser.json());
Routes1.use(fileUpload());
const page = require('../model/propertyPage');


//to get all the data
Routes1.get('/pagelist', async (req, res) => {
    try {
        const data = await page.find();
        res.status(200).json({
            message: "data found",
            data
        })
    }
    catch (e) {
        res.status(500).json({
            message: "error found no data"
        })
    }
});

// to get the data by ppd id
Routes1.get('/pagelist/:id', async (req, res) => {
    // const search = await page
    try {
        const search = `\^${req.params.id}`;
        const data = await page.find({ PPID: { $regex: search } });
        res.status(200).json({
            message: "data found",
            data
        })
    }
    catch (e) {
        res.status(500).json({
            message: "error found no data"
        })
    }

});

//to create a new property data
Routes1.post("/basicinfo", async (req, res) => {

    let { propertyType, price, ownership, propertyAge, propertyApproved, propertyDescription, bankLoan, negotiable } = req.body
    try {
        const data = await page.create({
            propertyType: propertyType,
            price: price,
            ownership: ownership,
            propertyAge: propertyAge,
            propertyApproved: propertyApproved,
            propertyDescription: propertyDescription,
            bankLoan: bankLoan,
            negotiable: negotiable,
        });
        res.status(200).json({
            message: "Basic information added successfully",
            id: data._id
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});

//to add the general info for the newly created property data
Routes1.patch("/generalinfo", async (req, res) => {
    //console.log({ ...req.body });
    try {
        const { name, postedBy, featuredPackage, contact, saleType, ppdPackage, imageUrl } = req.body;
        const data = await page.findByIdAndUpdate(req.body._id, {
            name, postedBy, featuredPackage, contact, saleType, ppdPackage, imageUrl
        }, { new: true }
        );
        console.log(data);
        res.status(200).json({
            message: "General information added successfully",
            id: data._id
        });
        // res.send(data);
    }
    catch (err) {
        //console.log(err.message)
        res.status(500).json({
            message: err.message
        });
    }
});

//to add the location info for the newly created property data
Routes1.patch("/locationinfo", async (req, res) => {
    //console.log({ ...req.body });
    try {
        const { email, city, area, pincode, address, landmark, latitude, longitude, PPID, views, daysLeft, status } = req.body;
        const data = await page.findByIdAndUpdate(req.body._id, { email, city, area, pincode, address, landmark, latitude, longitude, PPID, views, daysLeft, status },
            { new: true }
        );
        res.status(200).json({
            message: "Location information added successfully",
            id: data._id
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});

//to add the property details for the newly created property data
Routes1.patch("/propertydetails", async (req, res) => {
    //console.log({ ...req.body });
    try {
        const { length, breadth, totalArea, areaUnit, noOfBHK, noOfFloors, attached, westernToilet, furnished,
            carParking, lift, electricity, facing } = req.body;
        const data = await page.findByIdAndUpdate(req.body._id, {
            length, breadth, totalArea, areaUnit, noOfBHK, noOfFloors, attached, westernToilet, furnished,
            carParking, lift, electricity, facing
        },
            { new: true }
        );
        res.status(200).json({
            message: "Property details added successfully",
            id: data._id
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
});

//to get the basic info form data upon clicking previous button
Routes1.get('/basicinfo/:id', async (req, res) => {
    try {
        const data = await page.find({ _id: req.params.id }).select('propertyType price ownership propertyAge propertyApproved propertyDescription bankLoan negotiable ');
        res.status(200).json({
            message: "data found",
            data
        });
    }
    catch (e) {
        res.status(500).json({
            message: "error found no data"
        });
    }
});

//to get the general info form data upon clicking previous button
Routes1.get('/generalinfo/:id', async (req, res) => {
    try {
        const data = await page.find({ _id: req.params.id }).select(' name postedBy featuredPackage contact saleType ppdPackage imageUrl ');
        res.status(200).json({
            message: "data found",
            data
        })
    }
    catch (e) {
        res.status(500).json({
            message: "error found no data"
        });
    }
});

//to get the property details form data upon clicking previous button
Routes1.get('/propertydetails/:id', async (req, res) => {
    try {
        const data = await page.find({ _id: req.params.id }).select(' length breadth totalArea areaUnit noOfBHK noOfFloors attached westernToilet furnished carParking lift electricity facing ');
        res.status(200).json({
            message: "data found",
            data
        });
    }
    catch (e) {
        res.status(500).json({
            message: "error found no data"
        });
    }
});


module.exports = Routes1;