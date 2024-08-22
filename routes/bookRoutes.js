import express from 'express';

const router = express.Router();
let books = [];

// Listar todos os livros
router.get('/', (req, res) => {
    res.json(books);
});

// Adicionar um livro
router.post('/', (req, res) => {
    const newBook = req.body
    books.push(newBook);
    res.status(201).json(newBook);
});

// Atualizar um livro
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, year, available } = req.body;
    const book = books.find(b => b.id === parseInt(id));
    if (book) {
        book.title = title;
        book.author = author;
        book.year = year;
        book.available = available;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});
  
// Deletar um livro
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter(b => b.id !== parseInt(id));
    res.status(204).send();
});
  
export default router;
