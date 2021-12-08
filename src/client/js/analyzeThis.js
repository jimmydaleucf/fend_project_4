const updateUI = async (url = "") => {
  const response = await fetch("/all");
  try {
    const allData = await response.json();
    console.log(allData);
  } catch (error) {
    console.log("error", error);
  }
};

export { updateUI };
