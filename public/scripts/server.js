const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true })); // application is using body-parser to parse data sent from the client.
app.use(express.static('public/scripts'));

let calculatorCommands = [];

app.post('/equation', (req,res) => {
   
    console.log(`Get a POST request!`, req.body);

    let commands = req.body;

    // Push the information into the array
    console.log(`Adding new inventory: `, commands);
    calculatorCommands.push(commands);

    // Send back a status code of 201
    res.sendStatus(201);
});



app.listen(port, function() {
    console.log('listening on port', port);
});