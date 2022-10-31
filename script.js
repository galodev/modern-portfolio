
const modal = document.getElementById("modal")
const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")

const modalForm = document.getElementById("modal-form")


setTimeout(function(){
    modalInput.style.display= "flex"
},8000)

submitBtn.addEventListener("click", function(){

})

modalForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData (modalForm)
})