import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "First name is required"]
    },
    email: {
      type: String,
      validate: {
        validator: val => /^([\w-.]+@([\w-]+.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }


    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },


  }, {timestamps: true})

  //confirm Password

UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );



UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});




const User=mongoose.model("users",UserSchema)

export default User
