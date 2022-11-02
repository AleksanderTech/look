const express = require('express');

const app = express();

app.use(express.static('frontend'));

app.use((_req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
})

app.listen(4000, () => {
    console.log('Listening on port 4000...');
});
