const modal = document.getElementById("modal")
const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")


const modalForm = document.getElementById("modal-form")
const userName = consentFormData.get('userName')

// What im looking here is to take the value that the user put on name and add to the site, when the user clicks submit the modal will be closed

setTimeout(function(){
    modalInput.style.display= "flex"
},8000)

modalForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(modalForm)
    const name = loginFormData.get("userName")
    modal.style.display = "none"
})


setTimeout(function(){
    document.getElementById("main-info").innerHTML = `
    <h1>Hi! <span class="modal-display-name"> ${userName} </span> <br> <span>My name is Galo</span> </h1>
`
}, 1000)