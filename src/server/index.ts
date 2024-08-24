import express from "express";
import { requestLogger } from "./util/logger";

const app = express();

app.use(requestLogger)

app.route('/teapot').get((req, res) => {
    res.status(418).send('I am a teapot');
})

const port = process.env.PORT || 8000;
console.log(`Server running on port ${port}`);
app.listen(port);