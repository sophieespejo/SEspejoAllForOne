export function miniCh8Search(searchType, userInput8, allStudents)
{
    injectHere.innerHTML="";
    if (searchType == "hobbies")
    {
        searchHobbies(userInput8.value);
    }
    else
    {
            fetch("https://sespejodirectory.azurewebsites.net/directory/allstudents/"+ searchType + "/" + userInput8).then(
            response => response.json()
        ).then(
            data => {
                allStudents = [];
                allStudents.push(data);
                makeSlide(allStudents);
            }
        )
    }
}

export function getRandom(allStudents)
{
    injectHere.innerHTML="";
    fetch("https://sespejodirectory.azurewebsites.net/directory/random").then(
        response => response.json()
    ).then(
        data => 
        {
                allStudents = [];
                allStudents.push(data);
                makeSlide(allStudents);
        }
    )
}

export function makeSlide(allStudents)
{
    for(let i=0; i< allStudents.length; i++)
    {
        //create swiper div
        let outerDiv = document.createElement('div');
        outerDiv.className = "swiper-slide studentInfoTxt";
        //create first p tag
        let pFLnames = document.createElement('p');
        pFLnames.className = "mb-0";
        pFLnames.textContent = "Name: ";
        //create spans within 1 p tag
        let fNameSpan = document.createElement('span');
        fNameSpan.id = "fnameTxt";
        let lNameSpan = document.createElement('span');
        lNameSpan.id = 'lnameTxt';
        //append to spans to tag
        pFLnames.appendChild(fNameSpan);
        pFLnames.appendChild(lNameSpan);
        //create 2nd p tag
        let pEmail = document.createElement('p');
        pEmail.className = "mb-0";
        pEmail.textContent = "Email: "
        //create span in 2 p
        let emailSpan = document.createElement('span');
        emailSpan.id = "emailTxt";
        //append it together
        pEmail.appendChild(emailSpan);
        //create 3p
        let pSlack = document.createElement('p');
        pSlack.className = "mb-0";
        pSlack.textContent = "Slack ID: "
        //create span for 3p
        let slackSpan = document.createElement('span');
        slackSpan.id = "slackTxt";
        //append
        pSlack.appendChild(slackSpan);
        //create 4 p
        let pHobbies = document.createElement('p');
        pHobbies.className = "mb-0";
        pHobbies.textContent = "Hobbies: ";
        //create span for 4p
        let hobbiesSpan = document.createElement('span');
        hobbiesSpan.id = "hobbiesTxt";
        //append span to 4p
        pHobbies.appendChild(hobbiesSpan);
        //append all p's to outerdiv
        outerDiv.appendChild(pFLnames);
        outerDiv.appendChild(pEmail);
        outerDiv.appendChild(pSlack);
        outerDiv.appendChild(pSlack);
        outerDiv.appendChild(pHobbies);
        injectHere.appendChild(outerDiv);
    }
    let allSlides = document.getElementsByClassName('swiper-slide');
    // console.log(allSlides.length);
    fillSlidesWithData(allStudents, allSlides);
}

export function getAll(allStudents)
{
    injectHere.innerHTML="";
    fetch("https://sespejodirectory.azurewebsites.net/directory/allstudents/").then(
        response => response.json()
    ).then(
        data => {
            allStudents = data;
            console.log(allStudents);
            makeSlide(allStudents);
        }
    )
}

export function fillSlidesWithData(allStudents, allSlides)
{
    for(let i=0; i< allStudents.length; i++)
            {
                for(let j = 0; j < allSlides.length; j++)
                {
                    allSlides[j].children[0].children[0].textContent = allStudents[j].fName + " ";
                    allSlides[j].children[0].children[1].textContent = allStudents[j].lName;
                    allSlides[j].children[1].children[0].textContent = allStudents[j].email;
                    allSlides[j].children[2].children[0].textContent = allStudents[j].slackId;
                    allSlides[j].children[3].children[0].textContent = allStudents[j].hobbies;
                }
            }
}

export function searchHobbies (hobbiesSearch)
{
    injectHere.innerHTML="";
    fetch("https://sespejodirectory.azurewebsites.net/directory/allstudents/hobbieslist/"+hobbiesSearch).then(
        response => response.json()
    ).then(
        data => {
            allStudents = data;
            console.log("allstudents.length is" + allStudents.length);
            makeSlide(allStudents);
        }
    )
}