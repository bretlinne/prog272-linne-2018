
function search(){
    console.log('search');
}

function callServerWithoutParms(){
    fetch('/search')
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
            // THIS IS THE OLD CODE THAT DID SOMETHING WHEN SEARCH BUTTON PUSHED
            // console.log(response);
            // either this line, or the displayArea.inner... needs to be commented.
            //$("#displaySearch").html(JSON.stringify(response, null, 4));
        })
        .catch((ex) => {
            console.log(ex);
        })
}
const userMiles = document.getElementById('userInput').value;
fetch('/calculateFeetFromMiles' + '?miles=' + userMiles)
    .then((response) => response.json())
    .then((response) => {
        const displayArea = document.getElementById('displayArea');
        displayArea.innerHTML = JSON.stringify(response, null, 4);
    })
    .catch(ex => {
        console.log(ex);
    });

window.onload = function(){
    $("#search").click(callServerWithoutParms)
};