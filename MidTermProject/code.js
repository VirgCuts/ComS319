
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
    //Set up main container
    let mainContainer = document.getElementById("myData");

    //Set up div table
    let div = document.createElement("div");
    div.setAttribute("class","col-lg-8 mx-auto p-4 py-md-5");
    mainContainer.appendChild(div);

    //Set up div rows
    let div2 = document.createElement("div");
    div2.setAttribute("class","row g-5");
    div.appendChild(div2);
    
    for (let serviceName of data["Services"]) { //Each element in the json file
        
        for(let element in serviceName){
            //Set up a div col for each header
            let divColumn = document.createElement("div");
            divColumn.setAttribute("class","col-md-6");
            div2.appendChild(divColumn);
            
            //Header of the column
            let h1 = document.createElement("h1");
            h1.innerHTML = `<h1 style ="text-decoration-line: underline;" >${element}</h1>`;
            divColumn.appendChild(h1);

            //Create initial list
            let mainContainer2 = document.getElementById("myProduct"); //Next part of list
            let list = document.createElement("ul");
            list.setAttribute("class","icon-list ps-0");
            
            //Adding elements to the list
             for (let element2 of serviceName[element]) {

                let item = document.createElement("li");
                let h2 = document.createAttribute("h2");

                item.innerHTML = `<h2>${element2["serviceName"]}</h2> <p style="font-family:'Verdana'; text-align:left; font-size:18px;" > ${element2["information"]}</p><p style="font-family:'Verdana'; text-align:left; font-size:18px;"> Past services: ${element2["past_services"]} </p>`; //Can add style to h2
                
                
                for(let imageElement of element2["image"]){
                    let image = document.createElement("img")
                    image.setAttribute("src",`./images/${imageElement}`);
                    image.style.width = "50%";
                    image.style.height = "50%";
                    image.style.marginLeft = "auto";
                    item.appendChild(image);
                }
                list.appendChild(item);
                h1.appendChild(list);
            }
            
        }
    } // end of for
    
} // end of function appendData
