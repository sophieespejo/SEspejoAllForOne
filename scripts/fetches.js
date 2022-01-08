export default function fetchData(challengeNumber, whatever)
{
    let baseUrl = 
        "https://sespejoallforone.azurewebsites.net/Challenges/miniCh"+challengeNumber+"/"

    //save all inputs as an array for each minich
    //run a for loop going thru the array and appending the variables to the url 
    for (let i=0; i<whatever.length; i++)
    {
        baseUrl+=whatever[i]+"/"
    }
    return fetch(baseUrl).then(
        response => response.text()
    ).then(
        data => {
            // console.log(data) = data;
            return data;
        })
    // console.log(baseUrl);
}