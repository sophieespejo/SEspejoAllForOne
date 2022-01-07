export function getMadlib(name1, adjective, city, color, vehicle, verb, number, number1, adjective2, name2, output5)
{
    fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh5/"+ name1 + "/" + adjective + "/" + city + "/" + color + "/" + vehicle + "/" + verb + "/" + number + "/" + number1 + "/" + adjective2 + "/" + name2).then(
    response => response.text()
).then(
    data => 
    {
        output5.className = "fetchedStuff zoomer";
        output5.textContent = data;
    })
}

export function miniCh5(allInputs, name1, adjective, city, color, vehicle, verb, number, number1, adjective2, name2, output5)
{
    for(let i = 0; i< allInputs.length; i++)
    {
        if (allInputs[i] == "")
        {
            getMadlib(name1, adjective, city, color, vehicle, verb, number, number1, adjective2, name2, output5);
        }
        else{
            output5.className = "errorMsg shake";
            output5.textContent = "Please fill in all inputs"
        }
    }
}