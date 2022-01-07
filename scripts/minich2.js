export default function miniCh2(number1, number2, output2)
{
    if((parseInt(number1)) && (parseInt(number2)))
    {
            fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh2/"+ number1+"/"+number2).then(
            response => response.text()
        ).then(
            data => 
            {
                output2.className = "fetchedStuff zoomer";
                output2.textContent = data;
            })
    }
    else{
        output2.className = "errorMsg shake";
        output2.textContent = "Please select valid numbers.";
    }
}


