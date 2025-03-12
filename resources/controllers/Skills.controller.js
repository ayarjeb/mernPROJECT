import Skill from "../models/Skills.model.js";

// Create a new skill
async function createSkill(req, res) {
    try {
        const newObj = await Skill.create(req.body);
        res.json(newObj);
        console.log(newObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Get all skills
async function getAllSkills(req, res) {
    try {
        const allObj = await Skill.find();
        res.json(allObj);
        console.log(allObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Get one skill by ID
async function getOneSkill(req, res) {
    try {
        const findOne = await Skill.findById(req.params.id);
        res.json(findOne);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Update a skill
async function updateOneSkill(req, res) {
    try {
        const updatedObj = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(updatedObj);
        console.log(updatedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// Delete a skill by ID
async function deleteOneSkill(req, res) {
    try {
        const deletedObj = await Skill.findByIdAndDelete(req.params.id);
        res.json(deletedObj);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }  
}

// Export functions
export { createSkill, getAllSkills, getOneSkill, updateOneSkill, deleteOneSkill };
