import mongoose, { Schema } from "mongoose";

const Person = Schema({
  name: String,
});

export default mongoose.model('Person', Person);