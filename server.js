const express = require('express');
const app = express();

app.use(express.static('./dist/front'));

app.listen(process.env.PORT || 8080);
