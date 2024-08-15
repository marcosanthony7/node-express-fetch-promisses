import express, {json} from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(json());

app.get('/posts', (req, res) => {
    console.log('oioioi');

    fetch('https://jsonplaceholder.typicode.com/posts').then(result => {
        result.json().then(data => {
            res.send({
                posts: data
            });
        });
    }).catch(error => {
        res.send({
            message: error
        });
    });

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
