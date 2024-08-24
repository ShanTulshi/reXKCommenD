import express from "express";

const app = express();

app.route('/teapot').get((req, res) => {
    res.status(418).send('I am a teapot');
})

app.listen(process.env.PORT || 8000);