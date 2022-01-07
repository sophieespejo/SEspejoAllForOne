// alert("hii")

export default function miniCh1(userInput1, output1) {
  if (!parseInt(userInput1)) {
    fetch(
      "https://sespejoallforone.azurewebsites.net/Challenges/miniCh1/" +
        userInput1
    )
      .then((response) => response.text())
      .then((data) => (output1.textContent = data));
  } else {
    output1.textContent = "Please write a valid name";
  }
}

// export function createInstructions(instructionsArr) {
//   //create row
//   let mainRow = document.createElement("div");
//   mainRow.className = "row";
//   //create column
//   let mainCol = document.createElement("div");
//   mainCol.className = "col-12";
//   //create p tag in col
//   let pInstructions = document.createElement("p");
//   pInstructions.className = "instChText mt-md-3 mt-2";
//   pInstructions.textContent = instructionsArr;
//   //append p to col
//   mainCol.appendChild(pInstructions);
//   //append col to row
//   mainRow.appendChild(mainCol);
//   injectInstructionsHere.prepend(mainRow);
// }
