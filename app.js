const express = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req, res) =>{
    console.log('This route was just called!');
    res.send('this is working');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));