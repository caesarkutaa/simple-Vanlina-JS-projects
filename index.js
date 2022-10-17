const wrapper = document.querySelector(".wrapper")
qrInput = wrapper.querySelector(".form input")
generateBtn = wrapper.querySelector(".form button")


generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if(!qrValue) return; // prevent adding active clase in the wrapper if the input is empty
  console.log(qrValue);
  wrapper.classList.add("active")
}) 