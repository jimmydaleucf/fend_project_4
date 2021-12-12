function validateInput(formText) {
    if (formText.length == 0){
        alert('Please enter valid text to be analyzed');
        return true
    }
}

export {validateInput}