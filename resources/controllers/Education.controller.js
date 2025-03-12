import Education from "../models/Education.model.js";

// Create a new education
async function createEducation(req, res) {
    try {
        const newObj = await Education.create(req.body);
        res.json(newObj);
        console.log(newObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Get all educations
async function getAllEducation(req, res) {
    try {
        const allObj = await Education.find();
        res.json(allObj);
        console.log(allObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Get one education by ID
async function getOneEducation(req, res) {
    try {
        const findOne = await Education.findById(req.params.id);
        res.json(findOne);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Update an education
async function updateOneEducation(req, res) {
    try {
        const updatedObj = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedObj);
        console.log(updatedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Delete an education by ID
async function deleteOneEducation(req, res) {
    try {
        const deletedObj = await Education.findByIdAndDelete(req.params.id);
        res.json(deletedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Export functions
export { createEducation, getAllEducation, getOneEducation, updateOneEducation, deleteOneEducation };
