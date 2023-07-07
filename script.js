const form = document.getElementById("js-form");

const template = document.getElementById("js-template");

const main = document.getElementById("js-main")

function formSubmit(event){

    event.preventDefault();

    const rating = new FormData(event.target).get("rating");

    if(rating){
        main.innerHTML = template.innerHTML.replace(/{{x}}/, rating);
    }
}

form.addEventListener("submit", formSubmit);