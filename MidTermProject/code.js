
//Fetching the json file
fetch('./data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error:' + err);
            })
//This is a function that will appened data like a list
function appendData(data) {
    let mainContainer = document.getElementById("myData");
    for (let serviceName in data) { //Each element in the json file
        let div = document.createElement("div");
        div.innerHTML = `<br> <br> <h1> ${serviceName} </h1>`;  //This is what is actually displayed onto the computer
                                                                //Yet to be styled using CSS or JavaScript
        mainContainer.appendChild(div);
        let mainContainer2 = document.getElementById("myProduct"); //Next part of list
    for (let element of data[serviceName]) {
        console.log(element);
        let div2 = document.createElement("div");
        div2.innerHTML = `<h2>${element["serviceName"]}</h2> <br> ${element["information"]} <br> <img src = "./images/${element["image"]}" width="200px" height ="200px"> </img>`;
        mainContainer.appendChild(div2);
    }
    
    } // end of for
    
} // end of function appendData