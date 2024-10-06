// selecting the last para in the 
const lastpara=document.getElementById("lastpara")
let userch=0
let compch=0
let userscore=document.querySelector("#userpoint")
let compscore=document.querySelector("#comppoint")



// generate the computer choice using math.ramdow function and giving value for each
const compchoice=()=>{
  const options=["rock","paper","scisccor"]
  const randomind=Math.floor(Math.random()*3);
  return options[randomind]
}
function show(userwin,userbox,comp){
  if(userwin){
    lastpara.innerHTML=`you win ${userbox} beats ${comp}`
   lastpara.style.backgroundColor="green"
   userch++;
   userscore.innerText=userch;
   
  }
  else{ 
    
    lastpara.innerHTML=`you lose ${comp} beats ${userbox}`
    lastpara.style.backgroundColor="red"
    compch++;
    compscore.innerText=compch;
  }
}
const draw =()=>{
  lastpara.innerText="draw"
  lastpara.style.backgroundColor="black"
}
// print the userchioce and computer choice..
 const playgame=(userbox)=>{
  console.log("userchoice",userbox)
  const comp=compchoice()
  console.log("compchoice",comp)
  if(userbox === comp){
draw();
  }
 else {
  let  userwin=true
  if(userbox==="rock"){
  if(comp ==="paper")
  userwin=false
else
userwin=true
  }
else if(userbox==="paper"){
   if(comp==="scisccor")
   userwin=false
  else
  userwin=true    
  }
 

  else 
  {
    if(comp==="rock")
    userwin=false
  else
  userwin=true
  }
  show(userwin,userbox,comp);      
 }

}

 

// calling all the function ny click the box..
let boxes=document.querySelectorAll(".box")
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    const userbox=box.getAttribute("id")
playgame(userbox)

  })
  
})

