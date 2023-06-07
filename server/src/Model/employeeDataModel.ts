import  mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

interface IEmployee extends mongoose.Document {
  profile?: String;
  firstname: String;
  lastname: String;
  email: String;
  role?: String;
  dob?: String;
  address?: String;
  city?: String;
  state?: String;
  zipcode?: number;
  country?: String;
  isDeleted?: boolean;
}

const employeeSchema = new Schema<IEmployee>({
  profile: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail],
  },
  role: {
    type: String,
  },
  dob: {
    type: String,
  },
  address: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Employee = mongoose.model<IEmployee>("Employee", employeeSchema);

export default Employee;
