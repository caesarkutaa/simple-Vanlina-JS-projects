const wrapper = document.querySelector(".wrapper")
qrInput = wrapper.querySelector(".form input")
generateBtn = wrapper.querySelector(".form button")
qrimg = wrapper.querySelector(".qr-code img")


generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if(!qrValue) return; // prevent adding active clase in the wrapper if the input is empty
  console.log(qrValue);
  generateBtn.innerText = "Generating QR Code..."
  //getting QR code of user entered value using the server
  //api and pasing the api returned img src to qrimg
  qrimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
  qrimg.addEventListener("load", () => {
    wrapper.classList.add("active")
    generateBtn.innerText = "Generate QR Code"
  })
    
}) 


qrInput.addEventListener("keyup", () => {
  if(!qrInput.value){
    wrapper.classList.remove("active")
  }
})