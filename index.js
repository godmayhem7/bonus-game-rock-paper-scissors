document.querySelector("h2").addEventListener("click",()=>{
    document.querySelector(".rules-section").style.display="flex"
})

document.querySelector(".close-icon").addEventListener("click",()=>{
    document.querySelector(".rules-section").style.display="none"
})

let play = document.querySelectorAll(".game-div")

play.forEach((playy)=>{
  playy.addEventListener("click",function(){
    document.querySelector("main").style.display="none"
    document.querySelector("footer").style.display="flex"
  
   let images = ["images/icon-scissors.svg","images/icon-paper.svg","images/icon-rock.svg","images/icon-lizard.svg","images/icon-spock.svg"]
   let calc = Math.floor(Math.random()*5)
   document.querySelector("#cpu").setAttribute("src",images[calc])
    console.log(calc)
   if (this===play[0]){
    document.querySelector("#game-img").setAttribute("src",images[0])
   }else if(this===play[1]){
    document.querySelector("#game-img").setAttribute("src",images[1])
   }else if(this===play[2]){
    document.querySelector("#game-img").setAttribute("src",images[2])
   }else if(this===play[3]){
    document.querySelector("#game-img").setAttribute("src",images[3])
   }else if(this===play[4]){
    document.querySelector("#game-img").setAttribute("src",images[4])
   }

   let yourPick = document.querySelector("#game-img")
   let housePick = document.querySelector("#cpu")

   if (yourPick.getAttribute("src")===images[0] && calc===0 || yourPick.getAttribute("src")===images[1] && calc===1 || yourPick.getAttribute("src")===images[2] && calc===2 || yourPick.getAttribute("src")===images[3] && calc===3 || yourPick.getAttribute("src")===images[4] && calc===4){
    document.querySelector("span").innerHTML="Draw"
   }else if (yourPick.getAttribute("src")===images[0] && calc===1 || yourPick.getAttribute("src")===images[1] && calc===2 || yourPick.getAttribute("src")===images[2] && calc===3 || yourPick.getAttribute("src")===images[3] && calc===4 || yourPick.getAttribute("src")===images[4] && calc===0 ||yourPick.getAttribute("src")===images[0] && calc===3 || yourPick.getAttribute("src")===images[1] && calc===4 || yourPick.getAttribute("src")===images[2] && calc===0 || yourPick.getAttribute("src")===images[3] && calc===1 ||yourPick.getAttribute("src")===images[4] && calc===2){
    document.querySelector("span").innerHTML="You Win"
   }else{
    document.querySelector("span").innerHTML="You Lose"
   }

})
})


document.querySelector("button").addEventListener("click",()=>{
  document.querySelector("main").style.display="block"
  document.querySelector("footer").style.display="none"
})
