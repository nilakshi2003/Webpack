//validate name
function validateName(name) {
    let trimmedName = name.trim(); // Remove extra spaces
    let valid = true;
  

    if (trimmedName === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        
        valid = false;
    } else if (trimmedName.length < 3) {
        document.getElementById("nameError").innerHTML = "Name requires 3 characters";
        
        valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
        document.getElementById("nameError").innerHTML = "Name should have only letters and spaces";
        valid = false;
    }
    else{
        valid=true;
        document.getElementById("nameError").innerHTML = "";

    }
    return valid;

   
}
//validate email 
function validateEmail(email) {
    let trimmedEmail = email.trim(); // Remove extra spaces
    let valid = true;

    // Regular expression for a basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedEmail === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    } else if (!emailRegex.test(trimmedEmail)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }
    else{
        valid=true;
        document.getElementById("emailError").innerHTML = "";

    }
    return valid;

   
}
function validatePassword(password) {
    let trimmedPassword = password.trim();
    let valid = true;
    

    // Regex: Minimum 8 characters, at least one uppercase, one lowercase, and one number
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (trimmedPassword === "") {
       document.getElementById("passError").innerHTML= "Password is required";
        valid = false;
    } else if (!passwordRegex.test(trimmedPassword)) {
        document.getElementById("passError").innerHTML= "Password should have 1 uppercase 1 lowercase and 1 special symbol & 8 characters";
        valid = false;
    }
    else{
        valid=true;
        document.getElementById("passError").innerHTML = "";

    }
    return valid;

    
}
function validatePhone(phone) {
    let trimmedPhone = phone.trim();
    let valid = true;
    

    // Regex: Exactly 10 digits
    let phoneRegex = /^\d{10}$/;

    if (trimmedPhone === "") {
        document.getElementById("phoneError").innerHTML= "Phone Number is required";
        valid = false;
    } else if (!phoneRegex.test(trimmedPhone)) {
        document.getElementById("phoneError").innerHTML= "Phone Number should have 10 digits";
        valid = false;
    }
    else{
        valid=true;
        document.getElementById("phoneError").innerHTML = "";

    }
    return valid;
   
}
export function setupContactForm() {
    // let form=document.getElementById("contactForm");
    let mainForm=document.getElementById("contactForm");
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let phone=document.getElementById("phone");
    
    //blur  validation
    name.addEventListener("blur",()=>{
        validateName(name.value);
    });
    email.addEventListener("blur",()=>{
        validateEmail(email.value);
    });
    password.addEventListener("blur",()=>{
        validatePassword(password.value);
    });
    phone.addEventListener("blur",()=>{
        validatePhone(phone.value);
    });


        
    //input validation 
    name.addEventListener("input",()=>{
        validateName(name.value);
    })
    email.addEventListener("input",()=>{
        validateEmail(email.value);
    })
    password.addEventListener("input",()=>{
        validatePassword(password.value);
    })
    phone.addEventListener("input",()=>{
        validatePhone(phone.value);
    })

   //submit validation
   mainForm.addEventListener("submit", (event) => {
    let isNameValid = validateName(name.value);
    let isEmailValid = validateEmail(email.value);
    let isPasswordValid = validatePassword(password.value);
    let isPhoneValid = validatePhone(phone.value);

    if (!isNameValid || !isEmailValid || !isPasswordValid || !isPhoneValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});


 
   
}