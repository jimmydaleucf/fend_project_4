let baseURl= "https://api.meaningcloud.com/sentiment-2.1?"
let input = document.getElementById("input");


const formdata = new FormData();
formdata.append("key", "fc01f7cc1b734751ec308977748b84d3");
formdata.append("txt", "This is a test message to see if the boilerplate API call works");
formdata.append("lang", "en"); // 2-letter code, like en es fr ...

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow",
};

function analyzeThis(){
const response = fetch("https://api.meaningcloud.com/sentiment-2.1?key=fc01f7cc1b734751ec308977748b84d3&lang=en&txt=This is a hardcoded message to see if i can get the api to work.")
  .then(response => ({ 
    body: response.json()
  }))
  .then(({body }) => console.log(body))
  .catch(error => console.log('error', error));
}

export {analyzeThis}