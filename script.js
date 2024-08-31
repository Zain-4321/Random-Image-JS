const imgcontainer=document.querySelector(".container");
const bttn=document.querySelector(".btn")


bttn.addEventListener("click",()=>{
imgNum=6;
workImage();


})


function workImage(){
for(i=0;i<imgNum;i++){

const newImg=document.createElement("img");
newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
imgcontainer.appendChild(newImg);


}

}