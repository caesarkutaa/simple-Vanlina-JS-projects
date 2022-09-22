 
 let newhero = []

 const inputEL =document.getElementById("text-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEL = document.getElementById("ul-el")
 const deleteBtn = document.getElementById("delete-btn")

 

 function render(){
    let listitems = ""
    for(let i = 0; i < newhero.length; i++){
        listitems += "<li> <center>" + newhero[i] +"</center></li>"
        }
    ulEL.innerHTML = listitems

}
  deleteBtn.addEventListener("click", function(){
 
     newhero = []
      render()
  })  

 inputBtn.addEventListener("click", function(){
  newhero.push(inputEL.value)
   inputEL.value = ""
   


   render()
    
 })
  
inputEL.addEventListener("keypress", function onEvent(event){
    if (event.key === "Enter"){
        document.getElementById("input-btn").click();
    }
})