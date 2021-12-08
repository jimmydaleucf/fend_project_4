import { updateUI } from "..";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('input').value
    let formTextJSON = {formText};
    // console.log(formTextJSON)
    Client.postData('http://localhost:8081/addData',formTextJSON)
    .then(function(res){
        updateUI();
    }
        )
    // console.log(formText+"<== formText")
}
    

    // console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })


export { handleSubmit }
