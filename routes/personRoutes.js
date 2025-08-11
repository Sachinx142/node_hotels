const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// Person Route add a Person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data and Store data in req.body

    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the new person to the database
    const reponse = await newPerson.save();
    console.log("data saved");

    res.status(200).json(reponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Person route get a data
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data get Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Person workType api with get method and we can say to dynamic parameters
// workType is varibale treate in url
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract the work type from the URL parameter

    if (workType == "chef" || workType === "manager" || workType === "waiter") {
      const reponse = await Person.find({ work: workType });
      console.log("response fetched'");
      res.status(200).json(reponse);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a Person Data with put method
router.put("/:id", async (req, res) => {
  try {
    const presonId = req.params.id; // Extract the id from the URL parameter
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      presonId,
      updatePersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a Person Data with delete Method
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

     console.log('data delete');
     res.status(200).json({message: 'person Deleted Successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Node js is a runtine environement 

module.exports = router;
