const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const targetUrl = 'https://mefoundation.com/';
    request(targetUrl).pipe(res);
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
