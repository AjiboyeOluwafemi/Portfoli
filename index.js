let sideToggle = true;
sideBtnClick = ()=> {
    const getSideBtn = document.querySelector("#sideBar");

    if (!!sideToggle) {
        getSideBtn.style.display = "unset";
        getSideBtn.classList.add("animate__fadeInRight");
        getSideBtn.classList.remove("animate__fadeOutRight");

        sideToggle = false;
    } else if (!sideToggle) {
        getSideBtn.classList.remove("animate__fadeInRight");
        getSideBtn.classList.add("animate__fadeOutRight");
        
        sideToggle = true;
    } 
}


const spinner = document.querySelector("#siteSpinner");
const content = document.querySelector("#siteContent");
setTimeout(() => {
    spinner.classList.add("animate__fadeOut");
}, 3000);
setTimeout(() => {
    content.classList.remove("siteContent");
    spinner.style.display = "none";
}, 3200);
