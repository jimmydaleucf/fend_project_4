/* Global Variables */


let baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = "fc01f7cc1b734751ec308977748b84d3";
let text = 'this is a test message to see if i can get the api call working'
let lang = 'en'

const getAnalysis = async (baseURL, apiKey, text, lang) => {
  const res = await fetch(
    baseURL + apiKey + "&" + text+ '&'+ lang
  );
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};


//listen for 'click' and then run processInfo
// document.getElementById('generate').addEventListener('click', processInfo)
// const zipCode = document.getElementById("zip").value;
// const userInput = document.getElementById("feelings").value;


function processInfo(e){
    getAnalysis(baseURL, apiKey, text, lang) //get text analysis data//
      .then(function (data) {
        //then post the data to the server//
        postData("/addData", {
          body: data.body
        });
        updateUI(); //this runs and updates the UI!//
      });
};


const postData = async (url='', data = {}) => {
    console.log('POST');
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });
    // console.log(data);

    try {
        const newData = await response.json();
        console.log(newData);
        // console.log(newData);//problem seems to be around here, newData is coming back empty//
        return newData;
        
    }
    catch(error) {
        console.log('error', error);
    }
}
const updateUI= async(url ='')=>{
    const request = await fetch('/all')
        try{
            const allData = await request.json()
            // console.log(allData);
            document.getElementById('date').innerHTML = 'Date: '+ allData.date;
            document.getElementById('temp').innerHTML = 'Temp: ' + allData.temp + '\u00B0 F';
            document.getElementById('content').innerHTML ='How I feel today: '+ allData.userInput;
        }catch(error){
            console.log('error', error);
    }

}

// // Create a new date instance dynamically with JS
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let newDate = months[d.getMonth()]+'.'+ d.getDate()+'.'+ d.getFullYear();