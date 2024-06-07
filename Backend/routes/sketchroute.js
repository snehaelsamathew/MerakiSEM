import express from 'express';
import { addsketch, listsketch, removeSketch } from '../controllers/sketchcontroller.js';
import multer from 'multer';

const sketchRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Ensure unique filenames
  }
});

const upload = multer({ storage: storage });

// POST method for adding a sketch
sketchRouter.post("/add", upload.single("image"), addsketch);

// GET method for listing sketches
sketchRouter.get("/list", listsketch);

// POST method for removing a sketch
sketchRouter.post("/remove", removeSketch);

export default sketchRouter;
