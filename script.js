let dogurl= 'https://dog.ceo/api/breeds/image/random'

async function getdogimg(){
let img = await axios.get(dogurl)
return img.data.message
}

let dbtn = document.querySelector("#dbtn")
dbtn.addEventListener("click", async function(){
    let dimg = await getdogimg();
    let img = document.querySelector("#dogimg")
    img.src=dimg

})