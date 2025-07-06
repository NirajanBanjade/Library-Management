// import express from 'express';
// import {config} from "dotenv";
// import cors from "cors";
// import cookieParser from 'cookie-parser';
// export const app = express()

// config({path: "./config.env"});

// app.use(cors());
// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// import bookRoutes from './products/bookRoutes.js';
// import userRoutes from './products/userRoutes.js'

// app.use('/',userRoutes);
// app.use('/api/books', bookRoutes);  

import express from 'express';
import { config } from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

config({ path: "./config.env" });

// Middleware
app.use(cors({
  origin: process.env.FRONT_END_URL, // frontend for dev
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
import bookRoutes from './products/bookRoutes.js';
import userRoutes from './products/userRoutes.js';

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);  // changed from "/" to "/api/users" for clarity

// Serve frontend (production)
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});
