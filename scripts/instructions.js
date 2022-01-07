export default function GetInstructions(challengeNumber){
    let instructionsArr = [
        "Instructions: Write your name in the field below and press go to receive a greeting!",
        "Instructions: Write two numbers in the boxes below then press go to get the sum.",
        "Instructions: Fill in the input fields and press go to receive a wakeup message.",
        "Instructions: Select two numbers to get two comparison statements.",
        "Instructions: Fill in all 10 text boxes to create a Madlibs story.",
        "Instructions: Input a number in the field below and press go to see if it's odd or even!",
        "Instructions: First, select whether or not you would like to reverse a string of letters or numbers. Then input what you'd like to reverse.",
        "Instructions: Search the through the Season 4 Codestack directory to find a student.",
        "Instructions: Select a cuisine to receive a random restaurant and dish to try."
    ];
        //create row
        let mainRow = document.createElement("div");
        mainRow.className = "row";
        //create column
        let mainCol = document.createElement("div");
        mainCol.className = "col-12";
        //create p tag in col
        let pInstructions = document.createElement("p");
        pInstructions.className = "instChText mt-md-3 mt-2";
        pInstructions.textContent = instructionsArr[challengeNumber];
        //append p to col
        mainCol.appendChild(pInstructions);
        //append col to row
        mainRow.appendChild(mainCol);
        injectInstructionsHere.prepend(mainRow);
        
    // return instructionsArr[challengeNumber];
}