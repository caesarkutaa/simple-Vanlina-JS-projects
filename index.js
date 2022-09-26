 
 let newhero = ["wonder womman", "batman"]

 const inputEL =document.getElementById("text-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEL = document.getElementById("ul-el")
 const deleteBtn = document.getElementById("delete-btn")
 const delBtn = document.getElementsByClassName("del-btn")
 

 function render(){
    let listitems = ""
    for(let i = 0; i < newhero.length; i++){
        listitems += '<li class="flex-me"><span class="mr-2">' + newhero[i] +'</span> <span class="ml-2"><button onClick="deleteHero('+i+')">delete</button></span></li>'

        }
    ulEL.innerHTML = listitems

}
  deleteBtn.addEventListener("click", function(){
 
    newhero = []
      
  
      render()
  })  


// add a new list from clicking the input button
inputBtn.addEventListener("click", function(){
    let trimmedVal = inputEL.value.trim()
    if(trimmedVal.length < 1)
        return
    newhero.push(trimmedVal)
    inputEL.value = ""
    render()
 })
  

// add a new list on clicking the keyboard's "Enter" key 
inputEL.addEventListener("keypress", function onEvent(event){
    if (event.key === "Enter"){
        document.getElementById("input-btn").click();
    }
})


function deleteHero(index) {
    let elemToRemove = newhero[index]
    newhero = newhero.filter(function(value) {
        return value != elemToRemove
    })
    render()
}