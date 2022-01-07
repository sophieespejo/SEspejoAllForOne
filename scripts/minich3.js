export default function miniCh3(name, hour, minute, ampm, output3)
{
    if ((parseInt(hour)) && (parseInt(minute)) && name != "" && ampm != "nothing")
    {
            fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh3/" + name + "/" + hour + "/" + minute + "/" + ampm).then(
            response => response.text()
        ).then(
            data => 
            {
                output3.className = "fetchedStuff zoomer";
                output3.textContent = data
            })
    }
    else if(ampm == "nothing")
    {
        output3.textContent = "Please select AM or PM"
    }
    else{
        output3.className = "errorMsg shake";
        output3.textContent = "Please fill in all fields with valid inputs."
    }
}