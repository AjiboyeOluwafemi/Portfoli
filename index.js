let sideToggle = true;
sideBtnClick = ()=> {
    const getSideBar = document.querySelector("#sideBar");
    const getImg = document.getElementById("myImg");

    if (!!sideToggle) {
        getSideBar.style.display = "unset";
        getSideBar.classList.add("animate__fadeInRight");
        getSideBar.classList.remove("animate__fadeOutRight");

        setTimeout(() => {
            getImg.src = "images/svg/close.svg";
        }, 200);

        sideToggle = false;
    } else if (!sideToggle) {
        
        getSideBar.classList.remove("animate__fadeInRight");
        getSideBar.classList.add("animate__fadeOutRight");
        setTimeout(() => {
            getImg.src = "images/svg/dots.svg";
        }, 200);
        
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
}, 3250);
