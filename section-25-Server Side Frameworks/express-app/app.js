const express = require('express')
const app = express()
const port = 3000
// Example parameters

app.get('/', (req, res) => res.send('Hi there welcome to my assignment!'));


app.get('/speak:animal', (req, res) => {
    console.log(req.params);
    console.log(req.params.animal);

    var animal = req.params.animal;

    if (animal == ":pig") {
        res.send("the pig says \'Oink\'");
    } else if (animal == ":cow") {
        res.send('the cow says \'MOOO\'');
    } else if (animal == ":dog") {
        res.send('the dog says \'woof woof\'');
    }
});

app.get('/repeat/:message/:times', (req, res) => {
    var message = req.params.message;
    var stringNumber = req.params.times;
    stringNumber = stringNumber.substring(1);

    var time = parseInt(stringNumber, 10);
    var result = "";
    console.log(req.params);
    console.log(message);
    console.log(req.params.times);
    console.log(time);
    result += message;
    res.send(result);



});

app.get('*', function (req, res) {
    res.send("sorry, page not found.....");


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// .gitignore

