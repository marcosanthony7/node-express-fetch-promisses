import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Buscar todos os posts
router.get('/posts', async (req, res) => {
    try {
        const response = await fetch(API_URL);
        const posts = await response.json();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Error fetching posts');
    }
});

// Buscar posts por id
router.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            return res.status(404).send('Post not found');
        }
        const post = await response.json();
        res.json(post);
    } catch (error) {
        res.status(500).send('Error fetching post');
    }
});

export default router;
