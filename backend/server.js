require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth');
const friendRoutes = require('./routes/friend');
const connectDB = require('./config/db')
const app = express();
app.use(express.json());
// app.use(cors());
console.log("before Connection");

connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/friends', friendRoutes);




// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));