function search(){
    console.log('search');
}
function getPostOptions(body) {
    return {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(body)
    };
}

function calculateCircumference() {
    const userInput = document.getElementById('userInputCirc').value;
    const query = {propForServer: userInput};

    fetch('/calculateCircumference', getPostOptions(query))
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayAreaCirc');
            displayAreaCirc.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch((ex) => {
            console.log(ex);
        });
}
function callServerWithoutParms(){
    const userInput = document.getElementById('userInput').value;

    fetch('/calculateFeetFromMiles' + '?miles=' + userInput)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            $("#displayArea").html(JSON.stringify(response, null, 4));
        })
        .catch((ex)=>{
            console.log(ex);
        })
}

window.onload = function(){
    $("#calculateFeetFromMiles").click(callServerWithoutParms)
    $("#calculateCircumference").click(calculateCircumference)
};
/*

function getPostOptions(body) {
    return {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(body)
    };
}


fetch('/calculateFeetFromMiles' + '?miles=' + userMiles)
    .then((response) => response.json())
    .then((response) => {
        const displayArea = document.getElementById('displayArea');
        displayArea.innerHTML = JSON.stringify(response, null, 4);
    })
    .catch(ex => {
        console.log(ex);
    });

function callServer() {
    const userInput = document.getElementById('userInput').value;
    const query = {propForServer: userInput};

    fetch('/some-url', getPostOptions(query))
        .then((response) => response.json())
        .then((response) => {
            const displayArea = document.getElementById('displayArea');
            displayArea.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch((ex) => {
            console.log(ex);
        });
}

*/