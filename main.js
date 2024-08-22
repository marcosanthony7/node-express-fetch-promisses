import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import homeRoutes from './routes/homeRoutes.js';
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Usando as rotas
app.use('/books', bookRoutes);
app.use('/home', homeRoutes);
app.use('/post', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
