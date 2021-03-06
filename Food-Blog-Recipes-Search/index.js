let input = document.getElementById("recipe-input")
let button = document.getElementById("recipe-button")
let row = document.getElementById("row")

button.addEventListener("click",function(){
    row.innerHTML = "";
    let inputData = input.value;
    async function getData(){
        try{
            let apiResponse = await fetch(`https://api.edamam.com/search?q=${inputData}&app_id=7efbb56c&app_key=a7f1eadedc2eb9edd864b1984d0afa66`)
            let apiData = apiResponse.json()
            return apiData;
        }catch(err){
            console.log(err)
        }
    }
    getData().then((data)=>{
        console.log(data)
        for(let i=0;i<data.hits.length;i++){
        let vitaminsArray = []
        let nutrientsName = data.hits[i].recipe.totalNutrients
        vitaminsArray.push(nutrientsName.VITA_RAE,nutrientsName.VITB6A,nutrientsName.VITB12,nutrientsName.VITC,nutrientsName.VITD,nutrientsName.VITK1,nutrientsName.CHOLE,nutrientsName.FAT)
        let nutrientsArray = []
        for(let item = 0; item<vitaminsArray.length;item++){
             nutrientsArray.push(`${vitaminsArray[item].label} : ${vitaminsArray[item].quantity.toFixed(2)}${vitaminsArray[item].unit}`)
        }
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="card cardstyle col col-sm-12 col-lg-4" style="max-width: 18rem;">
            <img src="${data.hits[i].recipe.image}" style="height: 15rem;" class="card-img-top card-img" alt="...">
            <div class="card-body ">
                <div class="cardinfo d-flex justify-content-between">
                    <h5 class="card-title">${data.hits[i].recipe.label}</h5>
                    <a href="#" id="info" ><i class="fas fa-info-circle" name="info"  data-target="#Modals${i}" data-toggle="modal"></i></a>
                    <!-- Modal -->
                    <div class="modal fade " id="Modals${i}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="modalheading">Recipe Details</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <h5>Health Labels:</h5>
                                ${data.hits[i].recipe.healthLabels.join(", ")}
                                <h5>Vitamins:</h5>
                                ${nutrientsArray.join(",  ")}
                                <h5>Ingredient List:</h5>
                                ${data.hits[i].recipe.ingredientLines.join(",  ")}
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Calories : ${data.hits[i].recipe.calories.toFixed(1)} cal</li>
                </ul>
                <a href="${data.hits[i].recipe.url}" class="btn btn-outline-success">See Recipie Process</a>
            </div>
        </div>`

        row.appendChild(div)
        }
        input.value = ""
    })
    
})