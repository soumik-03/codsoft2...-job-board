import express, { json } from 'express';
import { connect } from 'mongoose';
import jobRoutes from './routes/jobRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

connect('mongodb://localhost/jobboard', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(json());

app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));