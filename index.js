const express = require('express');
const app = express();
const port = 3000;
const stoicapi = require("stoic-api").random();

console.log(stoicapi);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});