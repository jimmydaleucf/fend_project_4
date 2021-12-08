var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const database = require("mime-db");
// var FormData = require('form-data');

// const fetch = require('node-fetch');


const app = express()

app.use(cors());


app.use(express.static('dist'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

var creds = {
  application_key:process.env.API_KEY,
};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html')) {{removing as we now need to reference the dist folder file}}
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})



//****** Bring in text to analyze ********/
let text = "";
json ={};

//**** POST ROUTE ****/
app.post('/addData', postData);

function postData(req, res) {
  console.log("POST"+ req);
  text = req.body;
  console.log(text);
};



//*************** Meaningful API Call ********************/
let analyze = async function apiCall() {
  const formdata = new FormData();
  formdata.append("key", creds.application_key);
  formdata.append(
    "txt",
    "This is a test message to see if the boilerplate API call works"
  );
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(baseUrl, requestOptions); //?key=fc01f7cc1b734751ec308977748b84d3&lang=en&txt=This is a hardcoded message to see if i can get the api to work.")
  try {
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("error", error);
  }
}