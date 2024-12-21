import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import createError from 'http-errors';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// API routes will go here
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// 404 handler
app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
