let remove = (element) => {
    let countInput = element.parentElement.querySelector(".count");
    let count = Number(countInput.innerText);
    if (count === 0) {
        return;
    }
    let newCount = count - 1;
    if (newCount === 0) {
        element.style.cursor = "not-allowed";
    }
    countInput.innerText = newCount;
}

let add = (element) => {
    let countInput = element.parentElement.querySelector(".count");
    let count = Number(countInput.innerText);
    let newCount = count + 1;
    if (count === 0) {
        let minusIcon = element.parentElement.querySelector(".material-icons");
        minusIcon.style.cursor = "pointer";
    }
    countInput.innerText = newCount;
}

let onSubmit = () => {
    if(validateInputs()) {
        alert("all inputs are valid")
    }
}

let validateInputs = () => {
    let validate = true;

    // validate email type
    const email = document.getElementById("email");
    const emailInput = document.getElementById("email-container");
    validate = validate && validateEmail(emailInput, email);

    // validate phone number
    const phone = document.getElementById("phone");
    const phoneInput = document.getElementById("phone-container");
    validate = validate && validatePhone(phoneInput, phone);

    // validate postal code
    const postal = document.getElementById("postal");
    const postalInput = document.getElementById("postal-container");
    validate = validate && validatePostal(postalInput, postal);

    const fullname = document.getElementById("name");
    const nameInput = document.getElementById("name-container");
    validate = validate && validName(nameInput, fullname);
    
    return validate;
}

let validateEmail = (emailInput, email) => {
    if (email.validity.valueMissing) {
        handleInvalidInput(emailInput, email, "email is required");
        return false;
    }
    if (email.validity.typeMismatch) {
        handleInvalidInput(emailInput, email, "I am expecting an e-mail address!");
        email.addEventListener("input", (event) => validateEmail(event.path[1], event.path[0]));
        return false;
    } else {
        handleValidInput(emailInput, email);
        return true;
    }
}

let validatePhone = (phoneInput, phone) => {
    if (phone.validity.patternMismatch) {
        validate = false;
        handleInvalidInput(phoneInput, phone, "I am expecting format 123-456-7890");
        phone.addEventListener("input", (event) => validatePhone(event.path[1], event.path[0]));
        return false;
    } else {
        handleValidInput(phoneInput, phone);
        return true;
    }
}

let validatePostal = (postalInput, postal) => {
    if (postal.validity.patternMismatch) {
        validate = false;
        handleInvalidInput(postalInput, postal, "I am expecting format 12345")
        postal.addEventListener("input", (event) => validatePostal(event.path[1], event.path[0]));
        return false;
    } else {
        handleValidInput(postalInput, postal);
        return true;
    }
}

let validName = (nameInput, name) => {
    if (name.validity.valueMissing) {
        handleInvalidInput(nameInput, name, "name is required");
        name.addEventListener("input", (event) => validName(event.path[1], event.path[0]));
        return false;
    } else {
        handleValidInput(nameInput, name);
        return true;
    }
}

let handleInvalidInput = (container, element, errormessage) => {
    container.classList.add("invalid-input");
    element.setCustomValidity(errormessage);
}

let handleValidInput = (container, element) => {
    container.classList.remove("invalid-input");
    element.setCustomValidity("");
}