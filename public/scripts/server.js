const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true })); // application is using body-parser to parse data sent from the client.
app.use(express.static('public'));









app.listen(port, function() {
    console.log('listening on port', port);
});