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

import miniCh1 from "./miniCh1.js";
import miniCh2 from "./minich2.js";
import miniCh3 from "./minich3.js";
import miniCh4 from "./minich4.js";
import { getMadlib, miniCh5 } from "./minich5.js";
import miniCh6 from "./miniCh6.js";
import miniCh7 from "./miniCh7.js";
import { searchHobbies, fillSlidesWithData, getAll,makeSlide, getRandom, miniCh8Search } from "./minich8.js";
import miniCh9 from "./minich9.js";
import GetInstructions from "./instructions.js";

if(goBtn1 != null)
{
    GetInstructions(0);
    goBtn1.addEventListener('click', function()
    {
        miniCh1(ch1TxtBox.value,output1);
    })
}

if(goBtn2 != null)
{
    GetInstructions(1);
    goBtn2.addEventListener('click', function()
    {
        miniCh2(num1.value, num2.value, output2);
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
    goBtn3.addEventListener('click', function()
    {
        miniCh3(name3.value, hour3.value, min3.value, ampm, output3);
    })
}

if(goBtn4 != null)
{
    GetInstructions(3);
    goBtn4.addEventListener('click', function()
    {
        miniCh4(value1.value, value2.value, output4)
    })
}

if(goBtn5 != null)
{
    GetInstructions(4);
    goBtn5.addEventListener('click', function()
    {
        miniCh5(allInputs.length, allInputs[0].value, allInputs[1].value, allInputs[2].value, allInputs[3].value, allInputs[4].value, allInputs[5].value, allInputs[6].value, allInputs[7].value, allInputs[8].value, allInputs[9].value, output5);
    })
}

if(goBtn6 != null)
{
    GetInstructions(5);
    goBtn6.addEventListener('click', function()
    {
        miniCh6(num6.value, output6);
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
    goBtn7.addEventListener('click', function()
    {
        miniCh7(strOrInt, userInput7.value, output7)
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
        console.log(selectedCuisine);
    });
    goBtn9.addEventListener('click', function()
    {
        miniCh9(selectedCuisine, output9);
    })
}



