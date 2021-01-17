let input = document.getElementById("recipe-input")
let button = document.getElementById("recipe-button")
let row = document.getElementById("row")

button.addEventListener("click",function(){
    row.innerHTML = "";
    let inputData = input.value;
    async function getData(){
        try{
            let apiResponse = await fetch(`https://dictionaryapi.com/api/v3/references/learners/json/${inputData}?key=3313fa4c-9b92-4770-9184-e484389ebfea`)
            let apiData = apiResponse.json()
            let apidatamanipulation = await apiData.filter
            return apiData;
        }catch(err){
            console.log(err)
        }
    }
    getData().then((data)=>{
        console.log(data)
        for(let i=0;i<data.length;i++){
            let div = document.createElement("div")
            div.innerHTML = `
            <div class="card cardstyle col col-sm-12 col-lg-4" style="max-width: 18rem;">
                <ul>
                    <li>Word : ${data[i].meta.id}</li>
                    <li>${data[i].meta.id} is a ${data[i].fl}</li>
                    <li>Meaning : ${data[i].shortdef}</li>
                </ul>
            </div>`

        row.appendChild(div)
        }
        input.value = ""
    })
    
})