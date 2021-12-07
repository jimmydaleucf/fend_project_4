appData = {application_key: process.env.API_KEY};

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

creds = {
  application_key:process.env.API_KEY,
};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html')) {{removing as we now need to reference the dist folder file}}
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})





app.get('/all', sendCreds);
// console.log("POST");

function sendCreds(req,res){
    console.log(appData);
    res.send(appData)
     }
