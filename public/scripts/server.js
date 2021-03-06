const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true })); // application is using body-parser to parse data sent from the client.
app.use(express.static('public/scripts'));

let calculatorCommands = [];

app.post('/equation', (req, res) => {
    console.log(`Get a POST request!`, req.body);
    let commands = req.body;
    // Push the information into the array
    console.log(`Adding new inventory: `, commands);
    calculatorCommands.push(commands);
    doMath(calculatorCommands);
    res.sendStatus(201);
});
app.get('/equation', function (req, res) {
    console.log('request at /equation was made', req.body);
    res.send(calculatorCommands);
})

let total = 0;

function doMath(calculatorCommands) {
    // for( let i=0; i<calculatorCommands.length; i++){
    if (calculatorCommands[calculatorCommands.length - 1].operator === '+') {
        total = Number(calculatorCommands[calculatorCommands.length - 1].inputOne) + Number(calculatorCommands[calculatorCommands.length - 1].inputTwo);
        calculatorCommands[calculatorCommands.length - 1].total = total
    } else if (calculatorCommands[calculatorCommands.length - 1].operator === '-') {
        total = Number(calculatorCommands[calculatorCommands.length - 1].inputOne) - Number(calculatorCommands[calculatorCommands.length - 1].inputTwo);
        calculatorCommands[calculatorCommands.length - 1].total = total
    } else if (calculatorCommands[calculatorCommands.length - 1].operator === '*') {
        total = Number(calculatorCommands[calculatorCommands.length - 1].inputOne) * Number(calculatorCommands[calculatorCommands.length - 1].inputTwo);
        calculatorCommands[calculatorCommands.length - 1].total = total
    } else if (calculatorCommands[calculatorCommands.length - 1].operator === '/') {
        total = Number(calculatorCommands[calculatorCommands.length - 1].inputOne) / Number(calculatorCommands[calculatorCommands.length - 1].inputTwo);
        calculatorCommands[calculatorCommands.length - 1].total = total
    }
    // }
    console.log('updated array', calculatorCommands)
}









app.listen(port, function () {
    console.log('listening on port', port);
});