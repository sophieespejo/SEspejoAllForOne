export default function miniCh6(number, output6)
{
    if((parseInt(number)))
    {
                fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh6/"+number).then(
            response => response.text()
        ).then(
            data => 
            {
                output6.className = "fetchedStuff zoomer"
                output6.textContent = data;
            })
    }
    else{
        output6.className = "errorMsg shake";
        output6.textContent = "Please select a valid number."
    }
}