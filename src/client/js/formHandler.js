// import { updateUI } from "..";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('input').value;
    if (Client.validateInput(formText) == true) {
    return
    }else{
    let formTextJSON = {formText};
    // console.log(formTextJSON)
    Client.postData('http://localhost:8081/addData',formTextJSON)
    .then(function(res){
        Client.updateUI();
    }
        )
};}
    


export { handleSubmit }
