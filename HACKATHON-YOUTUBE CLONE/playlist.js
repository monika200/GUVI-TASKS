let input = document.getElementById("input1")
let button1 = document.getElementById("search1")
let row1 = document.getElementById("row1")
button1.addEventListener("click",function(){
    row1.innerHTML="";
    let channelName  = input.value;
    let base_URL = "https://www.googleapis.com/youtube/v3";
    async function getData(){
        try{
            let apiResponse = await fetch(`${base_URL}/search?part=snippet&q=${channelName}&type=video&key=AIzaSyDgxDaiONHT9qQ24deH8EXV2q_OI46-y-c`)
            let apiData = await apiResponse.json()
            let apiresult = await apiData.items
            return apiresult;
        }catch(err){
            console.log(err)
        }
    }
    getData().then((data1)=>{
        console.log(data1)
        for(let i=0;i<data1.length;i++){
            let div1 = document.createElement("div")
            div1.innerHTML = `
            <div class="card cardstyle col col-sm-12 col-lg-4" style="max-width: 18rem;">
            <p class="card-text"><b>ChannelId:</b><img src= ${data1[i].snippet.thumbnails.default.url} alt ="Channel Image"></p>
            <p class="card-text"><b>ChannelId:</b>${data1[i].snippet.channelId}</p>
            <p class="card-text"><b>ChannelTitle:</b>${data1[i].snippet.channelTitle}</p>
            <p class="card-text"><b>description:</b>${data1[i].snippet.description}</p>
            <p class="card-text"><b>publishTime:</b>${data1[i].snippet.publishTime}</p>
            <p class="card-text"><b>publishedAt:</b>${data1[i].snippet.publishedAt}</p>
            <p class="card-text"><b>LiveBroadcastContent:</b>${data1[i].snippet.liveBroadcastContent}</p>
            </div>`
       
        row1.appendChild(div1)
        }
        input.innerHTML="";
    })
    
})

