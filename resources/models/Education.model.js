import mongoose, { Schema, model } from "mongoose";

//****************************************** */ Define the Education schema **************************************
const EducationSchema = new Schema(
    {
      university_name: {
        type: String,
        required: [true, "University name is required"],
        minlength: [2, "University name must be at least 2 characters long"],
        maxlength: [255, "University name cannot exceed 255 characters"],
      },
      degree: {
        type: String,
        required: [true, "Degree is required"],
        minlength: [2, "Degree must be at least 2 characters long"],
        maxlength: [255, "Degree cannot exceed 255 characters"],
      },
      years: {
        type: Date,
        required: [true, "Years are required"],
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Create the Education model
  const Education = model("Education", EducationSchema);
  
  export default Education;
