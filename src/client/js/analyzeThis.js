// let baseURl= "https://api.meaningcloud.com/sentiment-2.1"
// let input = document.getElementById("input");
// const key = process.env.API_Key;

//  const getCreds = async (url = "") => {
//    const request = await fetch("http://localhost:8081/all");
//    try {
//      const allData = await request.json();
//      console.log(allData)
//    } catch (error) {
//      console.log("error", error);
//    }
//  };

function analyzeThis(formText) {
    // let formText = document.getElementById('input').value
    // let formTextString = {formText};
    console.log("formTextvalue="+formText);
    Client.postData('http://localhost:8081/addData',{
        formText:formText}
        );
    console.log(formText+"analyzeThis function")
}
 
  
//   .then((response) => ({
//       status: response.status,
//       body: response.json(),
//     }))
//     .then(({ body, status }) => console.log(status, body))
    
// }


export {analyzeThis}