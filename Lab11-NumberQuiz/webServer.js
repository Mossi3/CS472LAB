const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.urlencoded({
    extended: true
}))

app.use('/public', express.static("public")); // serve static files in public subdirectory under /public virtual path
app.set("view engine", "pug");
app.set('views', path.join(__dirname, "./public/views")); // use pug templates file in /public/views subdirectory

const questions = [
    "1, 2, 3, 4, 5", //easy
    "1, 1, 2, 3, 5", //fibonacci
    "1, 4, 9, 16, 25", //squares
    "2, 3, 5, 7, 11", //primes
    "1, 2, 4, 8, 16" //powers of 2
];

app.get('/', function(req, res) {
    res.render('index', { title: 'The Number Quiz', question: questions[0], number: 0, score: 0, hidden: true, hiddenResult: false })
})
app.post('/submit-form', (req, res) => {
    const number = parseInt(req.body.number)
    const answer = parseInt(req.body.answer)
    let score = req.body.score
    const answers = [6, 8, 36, 13, 32];
    if (answer === answers[number]) {
        score++
    }
    if (number === 4) {
        res.render('index', { title: 'The Number Quiz', score: score, question: questions[number + 1], number: number + 1, hidden: false, hiddenResult: true })
    } else {
        res.render('index', { title: 'The Number Quiz', score: score, question: questions[number + 1], number: number + 1, hidden: true, hiddenResult: false })
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})