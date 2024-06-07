import sketchModel from "../models/sketchmodel.js";
import fs from 'fs';

// Add sketch item
const addsketch = async (req, res) => {
  const image_filename = `${req.file.filename}`;

  const sketch = new sketchModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename
  });

  try {
    await sketch.save();
    res.json({ success: true, message: "Sketch added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding sketch", error: error.message });
  }
};

// List all sketches
const listsketch = async (req, res) => {
  try {
    const sketches = await sketchModel.find({});
    res.json({ success: true, data: sketches });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching sketches", error: error.message });
  }
};

// Remove sketch item
const removeSketch = async (req, res) => {
  try {
    const sketch = await sketchModel.findById(req.body.id);
    if (!sketch) {
      return res.status(404).json({ success: false, message: "Sketch not found" });
    }

    fs.unlink(`uploads/${sketch.image}`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Error deleting image", error: err.message });
      }
    });

    await sketchModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Sketch removed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error removing sketch", error: error.message });
  }
};

export { addsketch, listsketch, removeSketch };
