
// -----Validation-----
let error = document.getElementById("error")

function validF(){
    let fullname=  document.getElementById("fullname").value;
    if(fullname.trim().length ==0){
        return false;
    }
    return true;
}

function validE(){
    let email= document.getElementById("email").value
    if(email.trim().length==0){
        return false;
    }
    else if(!email.includes("@")){
        return false;
    }
   return true;
}

function validP(){
    let password= document.getElementById("password").value;
    let Confirm_password = document.getElementById("confirm_password").value;
    if(password.trim().length==0 && Confirm_password.trim().length==0){
        return false;
    }
    else if(password != Confirm_password){
        return false;
    }
    else{
        return true;
    }
}

function valid(){
    if ((validF()) && (validE()) && (validP())){
        error.innerText="Click on Sign Up Button"
        button.removeAttribute("disabled");
        error.style.color= "green";
    }
    else {
        error.innerText="Something Went Wrong"
        error.style.color= "rgb(230, 37, 37)";
    }
}

// <==========>((

// ----Sign Up ----



function signup(e) {
    event.preventDefault();
    var userFullName = document.getElementById("fullname").value;
    var userEmail = document.getElementById("email").value;
    var userPassword =  document.getElementById("password").value;
    let users=[];
    var userdata ={
        fullName: userFullName,
        email   : userEmail,
        password : userPassword,
    };
    users.push(userdata);
    document.forms[0].reset();
    console.log(users)
    localStorage.setItem('user', JSON.stringify(users))
}
var button = document.getElementById("btn")
button.addEventListener("click", () =>{
    window.location.href = 'profile.html';
});


// <==========>

// -----profile Data-----

let profileName = document.getElementById("name")
let profileEmail = document.getElementById("email")
let profilePassword = document.getElementById("password")

let profile = JSON.parse(localStorage.getItem('user'));

profileName.innerHTML= profile[0].fullName;
profileEmail.innerHTML= profile[0].email;
profilePassword.innerHTML= profile[0].password

let backButton = document.getElementById('backbtn')

backButton.addEventListener('click', ()=>{
    window.location.href='index.html';
    localStorage.clear();
})