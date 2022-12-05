const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");



loginBtn.addEventListener("click", () => {
    moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    signup.classList.remove("signupForm");
    moveBtn.innerHTML = "SIGN IN";

})

signupBtn.addEventListener("click", () => {
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    signup.classList.add("signupForm");
    moveBtn.innerHTML = "JOIN";
   

})


const form = document.querySelector('.form');
const username = document.getElementById('email');
const email = document.getElementById('fname');
const password = document.getElementById('lname');
const password2 = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    // window.location.href="index.html";
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const emailValue = email.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


    if (fnameValue === '') {
        setError(fname, '');
    } else {
        setSuccess(fname);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password);
    }

    if (lnameValue === '') {
        setError(lname, '');
    } else {
        setSuccess(lname);
    }



};



function saveData() {
    // Retrive Data
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var password = document.getElementById("password").value;
    var birthday = document.getElementById("birthday").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email })) {
        alert("User is already created");
    }
    else {
        user_records.push({
            "email": email,
            "fname": fname,
            "lname": lname,
            "password": password,
            "birthday": birthday
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }

}

let success = document.querySelector('.submitBtn');
success.addEventListener("click", () => {
    alert("You are successfully registered");
    
    
})





let btnClear = document.querySelector('.submitBtn');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');
});


// login section
// id= emailVer and id=passwordVer
// onclick= login()

// document.getElementById("submitBtn1").addEventListener("click", () => {
    // let flag=false;
    function userLogin() {
    let EMAIL = document.getElementById("EMAIL").value;

    let PASSWORD = document.getElementById("PASSWORD").value;
    

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == EMAIL && v.password == PASSWORD })) {
        alert("Login Successfully");
// >>>>>>> f78b9189f1828f92423fb4023c2584f3f4350ae3
    }
    else {
        alert('Incorrect Email or Password');
    }
}
  
  function go(){
    window.location.href="index.html";
  }