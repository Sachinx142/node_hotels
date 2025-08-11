const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Menu Data Save Api with endpoints
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItem(data);

    const reponse = await newMenu.save();

    res.status(200).json(reponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data get Successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType; // Extract the taste type from the URL parameter
    if (
      tasteType == "sweet" ||
      tasteType == "spicy" ||
      tasteType == "sour" ||
      tasteType == "savory"
    ) {
      const reponse = await MenuItem.find({ taste: tasteType });
      console.log("response fetched'");
      res.status(200).json(reponse);
    } else {
      res.status(404).json({ error: "Invalid Taste type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Update a Menu Data with put method
router.put("/:id", async (req, res) => {
  try {
    const menuItemId = req.params.id; // Extract the id from the URL parameter
    const updateMenuData = req.body;

    const response = await MenuItem.findByIdAndUpdate(
      menuItemId,
      updateMenuData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a Menu Data with delete Method
router.delete("/:id", async (req, res) => {
  try {
      const menuItemId = req.params.id; // Extract the id from the URL parameter


    const response = await MenuItem.findByIdAndDelete(menuItemId);

    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }

     console.log('data delete');
     res.status(200).json({message: 'Menu Item Deleted Successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
