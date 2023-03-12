
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
                                                                //Can add style to h1
        mainContainer.appendChild(div);
        let mainContainer2 = document.getElementById("myProduct"); //Next part of list
    for (let element of data[serviceName]) {
        console.log(element);
        let div2 = document.createElement("div");
        div2.innerHTML = `<h2>${element["serviceName"]}</h2> <br> ${element["information"]} <br> <br>`; //Can add style to h2
        mainContainer.appendChild(div2);
        for(let image of element["image"]){
            div2.innerHTML += ` <img src = "./images/${image}" width="200px" height ="200px"> </img>` ; //Can add style to h3
        }
    }
    
    } // end of for
    
} // end of function appendData