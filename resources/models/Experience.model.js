import mongoose, { Schema, model } from "mongoose";

//****************************************** */ Define the Experience schema **************************************
const ExperienceSchema = new Schema(
    {
      company: {
        type: String,
        required: [true, "Company name is required"],
        minlength: [2, "Company name must be at least 2 characters long"],
        maxlength: [255, "Company name cannot exceed 255 characters"],
      },
      job_title: {
        type: String,
        required: [true, "Job title is required"],
        minlength: [2, "Job title must be at least 2 characters long"],
        maxlength: [255, "Job title cannot exceed 255 characters"],
      },
      duration: {
        type: Date,
        required: [true, "Duration is required"],
      },
      description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 10 characters long"],
        maxlength: [1000, "Description cannot exceed 1000 characters"],
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Create the Experience model
  const Experience = model("Experience", ExperienceSchema);
  
  export default Experience;
