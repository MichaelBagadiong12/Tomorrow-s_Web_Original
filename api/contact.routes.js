// contact.routes.js
import express from 'express';
import Contact from './models/Contact.js'; // import the Mongoose model

const router = express.Router();

router.post('/', async (req, res) => {
  const { fullName, email, message } = req.body;

  try {
    const newContact = new Contact({ fullName, email, message });
    await newContact.save();

    res.json({ msg: ['Message saved to database successfully!'] });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ msg: ['Error saving message'] });
  }
});

export default router;