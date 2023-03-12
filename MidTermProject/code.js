
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
    for (let serviceName of data["Services"]) { //Each element in the json file
        console.log(serviceName);
        let div = document.createElement("div");
        for(let element in serviceName){
            div.innerHTML = `<h1><br>${element}<br> </h1>`;  //This is what is actually displayed onto the computer
            mainContainer.appendChild(div);
            let mainContainer2 = document.getElementById("myProduct"); //Next part of list
             for (let element2 of serviceName[element]) {
                console.log(element2);
                let div2 = document.createElement("div");
                div2.innerHTML = `<br><h2 id="serviceNameId">${element2["serviceName"]}</h2> ${element2["information"]} <br> <sec>Past services: </sec> ${element2["past_services"]} <br>`; //Can add style to h2
                mainContainer.appendChild(div2);
                for(let image of element2["image"]){
                    div2.innerHTML += ` <img src = "./images/${image}" width="200px" height ="200px"> </img>` ; //Can add style to h3
                }
            }
        }
    } // end of for
    
} // end of function appendData
