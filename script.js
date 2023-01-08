const modalInput = document.getElementById("modal-input")
const submitBtn = document.getElementById("submit-name-btn")
const consentForm = document.getElementById("consent-form")


setTimeout(function(){
    modalInput.style.display= "flex"
},7400)

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


/* <div class="modal" id="modal">
           
<div class="container">

    <div id="typed-strings">
    <p> Hi!</p>
    <p>Welcome<strong></strong></p>
    <p>Please type your name for a personalized experience</p>
    </div>
    <span id="typed"></span>

    <div class="modal-input" id="modal-input">
    <input type="text" name="userName" id="userName" placeholder="name" required>
    <button type="submit" id="submit-name-btn">Submit</button>
    </div>

</div>

</form>

<script>
var typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 60,
backSpeed: 0,
});
</script> */