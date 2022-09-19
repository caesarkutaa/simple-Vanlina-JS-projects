//set initial count
let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

 btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
         const counter = e.currentTarget.classList;
         if(counter.contains("decrease")){
            count--;
         } else if (counter.contains("reset")){
            count = 0;
         }else{
           count++;
         }

         if(count > 0){
            value.style.color ='green';
         } else if(count <  0){
           value.style.color = 'red'
         }else{
            value.style.color = 'black'
         }
         value.textContent = count
    })

 })

