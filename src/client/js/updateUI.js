const updateUI = async (url = "") => {
  const response = await fetch("/all");
  try {
    const allData = await response.json();
    console.log(allData);
    document.getElementById('agree').innerHTML="Agreement: "+ allData.agreement
    document.getElementById("subj").innerHTML ="Subjectivity: " + allData.subjectivity;
    document.getElementById("irony").innerHTML ="Irony: " + allData.irony;
    document.getElementById("confidence").innerHTML ="Confidence: " + allData.confidence;
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
