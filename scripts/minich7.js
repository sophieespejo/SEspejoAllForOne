export default function miniCh7(stringOrInteger, userInput, output7)
{
    if(stringOrInteger == "string")
    {
        if(parseInt(userInput))
        {
            output7.textContent = "Please make sure your phrase contains letters only";
        }
        else
        {
            fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh7/"+ stringOrInteger + "/" + userInput).then(
            response => response.text()
        ).then(
            data => output7.textContent = data
        )
        }
    }
    else if(stringOrInteger == "int")
    {
        if(!(parseInt(userInput)))
        {
            output7.textContent = "Please make sure your phrase contains numbers only";
        }
        else
        {
            fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh7/"+ stringOrInteger + "/" + userInput).then(
            response => response.text()
        ).then(
            data => output7.textContent = data
        )
        }
    }
    else if(stringOrInteger == "nothing")
    {
        output7.textContent = "Please select a valid option from the dropdown menu"
    }
}
