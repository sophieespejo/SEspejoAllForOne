// alert("hii")
let ch1TxtBox = document.getElementById('ch1TxtBox'),
    goBtn1 = document.getElementById('goBtn1'),
    output1 = document.getElementById('output1'),
    num1 = document.getElementById('num1'),
    num2 = document.getElementById('num2'),
    goBtn2 = document.getElementById('goBtn2'),
    output2 = document.getElementById('output2'),
    name3 = document.getElementById('name3'),
    hour3 = document.getElementById('hour3'),
    min3 = document.getElementById('min3'),
    ampm3 = document.getElementById('ampm3'),
    ampm,
    output3 = document.getElementById('output3'),
    goBtn3 = document.getElementById('goBtn3'),
    value1 = document.getElementById('value1'),
    value2 = document.getElementById('value2'),
    goBtn4 = document.getElementById('goBtn4'),
    output4 = document.getElementById('output4'),
    allInputs = document.getElementsByClassName('form-control'),
    output5 = document.getElementById('output5'),
    goBtn5 = document.getElementById('goBtn5'),
    num6 = document.getElementById('num6'),
    goBtn6 = document.getElementById('goBtn6'),
    output6 = document.getElementById('output6'),
    stringOrInt = document.getElementById('stringOrInt'),
    strOrInt,
    userInput7 = document.getElementById('userInput7'),
    goBtn7 = document.getElementById('goBtn7'),
    output7 = document.getElementById('output7'),
    searchType = document.getElementById('searchType'),
    allSlides = document.getElementsByClassName('swiper-slide'),
    selectedType,
    allStudents,
    allStudentsWithHobby,
    injectHere = document.getElementById('injectHere'),
    userInput8 = document.getElementById('userInput8'),
    goBtn8 = document.getElementById('goBtn8'),
    fnameTxt = document.getElementById('fnameTxt'),
    lnameTxt = document.getElementById('lnameTxt'),
    emailTxt = document.getElementById('emailTxt'),
    slackTxt = document.getElementById('slackTxt'),
    hobbiesTxt = document.getElementById('hobbiesTxt'),
    allBtn = document.getElementById('allBtn'),
    randomBtn = document.getElementById('randomBtn'),
    output9 = document.getElementById('output9'),
    goBtn9 = document.getElementById('goBtn9'),
    cuisineOptions = document.getElementById('cuisineOptions'),
    selectedCuisine,
    injectInstructionsHere = document.getElementById('injectInstructionsHere');

// import miniCh1 from "./miniCh1.js";
// import miniCh2 from "./minich2.js";
// import miniCh3 from "./minich3.js";
// import miniCh4 from "./minich4.js";
// import { getMadlib, miniCh5 } from "./minich5.js";
// import miniCh6 from "./miniCh6.js";
// import miniCh7 from "./miniCh7.js";
import { searchHobbies, fillSlidesWithData, getAll,makeSlide, getRandom, miniCh8Search } from "./minich8.js";
// import miniCh9 from "./minich9.js";
import GetInstructions from "./instructions.js";
import fetchData from "./fetches.js";

if(goBtn1 != null)
{
    GetInstructions(0);
    goBtn1.addEventListener('click', async function()
    {
        if (!parseInt(ch1TxtBox.value)) {
            let dataFromFetch = await fetchData(1, [ch1TxtBox.value]);
            output1.className = "fetchedStuff zoomer";
            output1.textContent = dataFromFetch;
          } else {
            output1.className = "errorMsg shake";
            output1.textContent = "Please write a valid name";
          }
        // miniCh1(ch1TxtBox.value,output1);
    })
}

if(goBtn2 != null)
{
    GetInstructions(1);
    goBtn2.addEventListener('click', async function()
    {
        if((parseInt(num1.value)) && (parseInt(num2.value)))
        {
            let dataFromFetch = await fetchData(2, [num1.value, num2.value]);
            // miniCh2(num1.value, num2.value, output2);
            output2.className = "fetchedStuff zoomer";
            output2.textContent = dataFromFetch;
        }
        else{
            output2.className = "errorMsg shake"
            output2.textContent = "Please select valid numbers."
        }
    })
}

if(goBtn3 != null)
{
    GetInstructions(2);
    ampm3.addEventListener('input', function()
    {
        ampm = this.value;
        console.log(ampm);
    })
    goBtn3.addEventListener('click', async function()
    {
        if ((parseInt(hour3.value)) && (parseInt(min3.value)) && name3.value != "" && ampm != "nothing")
        {
            let dataFromFetch = await fetchData(3, [name3.value, hour3.value, min3.value, ampm]);output3.className = "fetchedStuff zoomer";
            output3.textContent = dataFromFetch;
        
        }
        else if(ampm == "nothing")
        {
            output3.className = "errorMsg shake";
            output3.textContent = "Please select AM or PM";
        }
        else{
            output3.className = "errorMsg shake";
            output3.textContent = "Please fill in all fields with valid inputs.";
        }
            // miniCh3(name3.value, hour3.value, min3.value, ampm, output3);
        })
}

if(goBtn4 != null)
{
    GetInstructions(3);
    goBtn4.addEventListener('click', async function()
    {
        if((parseInt(value1.value)) && (parseInt(value2.value)))
        {
            let dataFromFetch = await fetchData(4, [value1.value, value2.value]);
            output4.className = "fetchedStuff zoomer";
            output4.textContent = dataFromFetch;
            
        }
    else {
            output4.className = "errorMsg shake";
            output4.textContent = "Please select valid numbers.";
        }
        // miniCh4(value1.value, value2.value, output4)
    })
}

if(goBtn5 != null)
{
    GetInstructions(4);
    goBtn5.addEventListener('click', async function()
    {
        for(let i = 0; i< allInputs.length; i++)
        {
            if(!allInputs[i] == "")
            {
                let dataFromFetch = await fetchData(5, [allInputs[0].value, allInputs[1].value, allInputs[2].value, allInputs[3].value, allInputs[4].value, allInputs[5].value, allInputs[6].value, allInputs[7].value, allInputs[8].value, allInputs[9].value]);
                output5.className = "mlTxt zoomer";
                output5.textContent = dataFromFetch;
            }
            else{
                output5.className = "errorMsg shake";
                output5.textContent = "Please fill in all inputs";
            }
        }

        // miniCh5(allInputs.length, allInputs[0].value, allInputs[1].value, allInputs[2].value, allInputs[3].value, allInputs[4].value, allInputs[5].value, allInputs[6].value, allInputs[7].value, allInputs[8].value, allInputs[9].value, output5);
    })
}

if(goBtn6 != null)
{
    GetInstructions(5);
    goBtn6.addEventListener('click', async function()
    {
        if((parseInt(num6.value)))
        {
            let dataFromFetch = await fetchData(6, [num6.value]);
            output6.className = "fetchedStuff zoomer";
            output6.textContent = dataFromFetch;
            
        }
        else{
            output6.className = "errorMsg shake";
            output6.textContent = "Please select a valid number.";
        }
        // miniCh6(num6.value, output6);
    })
}

if(goBtn7 != null)
{
    GetInstructions(6);
    stringOrInt.addEventListener('input', function()
    {
        strOrInt = this.value;
        console.log(strOrInt);
    });
    goBtn7.addEventListener('click', async function()
    {
        if(strOrInt == "string")
        {
            if(parseInt(userInput7.value))
            {
                output7.className = "errorMsg shake";
                output7.textContent = "Please make sure your phrase contains letters only";
            }
            else 
            {
                let dataFromFetch = await fetchData(7, [strOrInt, userInput7.value]);
                output7.className = "fetchedStuff zoomer";
                output7.textContent = dataFromFetch;
            }
        }
        else if(strOrInt == "int")
        {
            if(!(parseInt(userInput7.value)))
            {
                output7.className = "errorMsg shake";
                output7.textContent = "Please make sure your phrase contains numbers only";
            }
            else{
                let dataFromFetch = await fetchData(7, [strOrInt, userInput7.value]);
                output7.className = "fetchedStuff zoomer";
                output7.textContent = dataFromFetch;
            }
        }
        else if(stringOrInteger == "nothing")
        {
            output7.className = "errorMsg shake";
            output7.textContent = "Please select a valid option from the dropdown menu";
        }
    })
}


if(goBtn8 != null)
{
    GetInstructions(7);
    searchType.addEventListener('input', function()
    {
        selectedType = this.value;
    });

    goBtn8.addEventListener('click', function()
    {
        miniCh8Search(selectedType, userInput8.value, allStudents)
    });
    allBtn.addEventListener('click', function()
    {
        getAll();
    });

    randomBtn.addEventListener('click', function()
    {
        getRandom();
    });
}

if(goBtn9 != null)
{
    GetInstructions(8);
    cuisineOptions.addEventListener('input', function()
    {
        selectedCuisine = this.value;
    });
    goBtn9.addEventListener('click', async function()
    {
        if(selectedCuisine == "nothing")
        {
            output9.className = "errorMsg shake";
            output9.textContent = "Please select a valid cuisine from the dropdown menu";
        }
        else{
            let dataFromFetch = await fetchData(9, [selectedCuisine]);
            output9.className = "fetchedStuff zoomer";
            output9.textContent = dataFromFetch;
        }
        // miniCh9(selectedCuisine, output9);
    });
}



