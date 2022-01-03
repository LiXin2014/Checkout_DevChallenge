let remove = (element) => {
    let countInput = element.parentElement.querySelector(".count");
    let count = Number(countInput.innerText);
    if(count === 0) {
        return;
    }
    let newCount = count - 1;
    if(newCount === 0) {
        element.style.cursor = "not-allowed";
    } 
    countInput.innerText = newCount;
}

let add = (element) => {
    let countInput = element.parentElement.querySelector(".count");
    let count = Number(countInput.innerText);
    let newCount = count + 1;
    if(count === 0) {
        let minusIcon = element.parentElement.querySelector(".material-icons");
        minusIcon.style.cursor = "pointer";
    }
    countInput.innerText = newCount;
}