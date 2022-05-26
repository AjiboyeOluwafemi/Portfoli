const spinner = document.querySelector("#siteSpinner");
const content = document.querySelector("#siteContent");
setTimeout(() => {
    spinner.classList.add("animate__fadeOut");
}, 3000);
setTimeout(() => {
    content.classList.remove("siteContent");
    spinner.style.display = "none";
}, 3250);
