
buildTopFive()

function buildTopFive(){
let nodeCardTop = document.querySelectorAll(".cardTop")

nodeCardTop.forEach(image=>{  
let number = Math.floor(Math.random() * 50);
let sourceImg =    "https://source.unsplash.com/collection/8830197/480x480?sig=" + number +"&client_id=hXJZfm926ewJ7LxaoHzwVxiR7cyTnkdu3Vidn6Ojdew";
image.innerHTML+= `<img class="h-40 rounded-2xl w-full object-cover"
src=`  + sourceImg + `alt="image du top 5">`
});

return 0   
}
