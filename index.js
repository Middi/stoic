const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const stoicapi = require("stoic-api");

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });  

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});