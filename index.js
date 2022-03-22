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




setTimeout(() => {
    const spinner = document.querySelector("#siteSpinner");
    spinner.classList.add("animate__fadeOut");
}, 3000);
setTimeout(() => {
    const content = document.querySelector("#siteContent");
    content.classList.remove("siteContent");
}, 3100);
