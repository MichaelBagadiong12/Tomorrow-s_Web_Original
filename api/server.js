// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './contact.routes.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'https://gym-warrior.onrender.com',
  credentials: true
}))

app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://renierbagadiong13:renierbagadiong13@contactformdb.9jri56y.mongodb.net/contact_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});