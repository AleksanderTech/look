const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('frontend'));

app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(4000, () => {
    console.log('Listening on port 4000...');
});
