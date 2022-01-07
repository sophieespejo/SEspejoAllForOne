export default function miniCh9(cuisineType, output9)
{
    if(cuisineType == "nothing")
    {
        output9.className = "errorMsg shake";
        output9.textContent = "Please select a valid cuisine from the dropdown menu";
    }
    else{
        fetch("https://sespejoallforone.azurewebsites.net/Challenges/miniCh9/"+cuisineType).then(
            response => response.text()
        ).then(
            data => {
                output9.className = "fetchedStuff zoomer";
                output9.textContent = data;
            })
    }
}