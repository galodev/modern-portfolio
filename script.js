const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")
const consentForm = document.getElementById("consent-form")


// What im looking here is to take the value that the user put on name and add to the site, when the user clicks submit the modal will be closed

setTimeout(function(){
    modalInput.style.display= "flex"
},9000)

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("userName")
    modal.style.display = "none"
    document.getElementById("main-info").innerHTML = 
    ` 
    <h1>Hi ${name}!<br> <span>My name is Galo</span> </h1>
    `
})

/* setTimeout(function(){
    document.getElementById("main-info").innerHTML = 
    `
    <h1>Hi! <span class="modal-display-name"> ${userName} </span> <br> <span>My name is Galo</span> </h1> 
    `
}, 1000) */