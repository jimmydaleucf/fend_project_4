let baseURl= "https://api.meaningcloud.com/sentiment-2.1?"
let input = document.getElementById("input");
// const key = process.env.API_Key;

 async function getCreds(){
    const response = await fetch('/all');
    try{
        console.log(response)
        const allData = await response.json()
    
    // const creds = request.json();
    const key = response.application_key;
    console.log(key);
    return key;
    }catch(error){
            console.log('error', error);
    }
}

function analyzeThis() {
  getCreds();
  apiCall();

async function apiCall(){
  const formdata = new FormData();
  formdata.append("key", `${key}`);
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

  const response = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",requestOptions) //?key=fc01f7cc1b734751ec308977748b84d3&lang=en&txt=This is a hardcoded message to see if i can get the api to work.")
    try {
        const results = await response.json();
        console.log(results);
        return results
    }  
    catch(error) {
        console.log("error", error);
    }
}
  
//   .then((response) => ({
//       status: response.status,
//       body: response.json(),
//     }))
//     .then(({ body, status }) => console.log(status, body))
    
// }
}

export {analyzeThis}