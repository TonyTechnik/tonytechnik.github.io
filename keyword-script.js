function checkKeyword() {
  const input = document.getElementById("keywordInput").value.toLowerCase();
  const responseArea = document.getElementById("responseArea");

  fetch("keywords.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load keywords.");
      }
      return response.json();
    })
    .then((data) => {
      if (data[input]) {
        responseArea.textContent = data[input];
      } else {
        responseArea.textContent = "It evades me.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      responseArea.textContent = "???";
    });
}