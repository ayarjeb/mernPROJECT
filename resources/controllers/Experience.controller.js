import Experience from "../models/Experience.model.js";

// Create a new experience
async function create(req, res) {
    try {
        const newObj = await Experience.create(req.body);
        res.json(newObj);
        console.log(newObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Get all experiences
async function getAll(req, res) {
    try {
        const allObj = await Experience.find();
        res.json(allObj);
        console.log(allObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Get one experience by ID
async function getOne(req, res) {
    try {
        const findOne = await Experience.findById(req.params.id);
        res.json(findOne);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Update an experience
async function updateOne(req, res) {
    try {
        const updatedObj = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedObj);
        console.log(updatedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Delete an experience by ID
async function deleteOne(req, res) {
    try {
        const deletedObj = await Experience.findByIdAndDelete(req.params.id);
        res.json(deletedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Export functions
export { create, getAll, getOne, updateOne, deleteOne };
