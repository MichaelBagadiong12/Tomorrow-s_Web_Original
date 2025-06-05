// models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
export default Contact; 