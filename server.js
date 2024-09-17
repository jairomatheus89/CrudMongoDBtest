const express = require('express');
const path = require('path');

const app = express();

// Serve static files (your HTML page)
app.use(express.static(path.join(__dirname)));

// Listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});