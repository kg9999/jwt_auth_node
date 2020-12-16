const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

const port = process.env.npm_config_port || process.argv[2];

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});