let baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
var creds = {
  application_key: process.env.API_KEY,
};

//make API call to the Meaningful API//

async function apiCall() {
  const formdata = new FormData();
  formdata.append("key", creds);
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
