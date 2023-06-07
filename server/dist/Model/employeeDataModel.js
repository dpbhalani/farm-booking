import * as mongoose from "mongoose";
import validator from "validator";
const { Schema } = mongoose;
const employeeSchema = new Schema({
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
const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
//# sourceMappingURL=employeeDataModel.js.map
