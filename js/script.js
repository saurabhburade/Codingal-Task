let cross = false;
const hamberger = document.getElementById("hamberger-button");
hamberger.addEventListener("click", event => {
    const berger = document.getElementsByClassName("berger");
    if (!cross) {
        document.getElementsByClassName("nav-end")[0].style.display = "flex";
        berger[1].style.display = "none";
        berger[0].className += " rotateClock45 ";
        berger[2].className += " rotateAnticlock45 ";
        cross = true;
    } else {
        document.getElementsByClassName("nav-end")[0].style.display = "none";
        berger[1].style.display = "block";
        berger[0].className = " berger ";
        berger[2].className = " berger ";
        cross = false;
    }
});
const closeModal = () => {
    document.getElementById("modal").style.display = "none";
};
const openModal = () => {
    document.getElementById("modal").style.display = "flex";
};
const openSuboptions = flag => {
    if (flag) {
        document.getElementsByClassName("suboptions")[0].style.display =
            "block";
    } else {
        document.getElementsByClassName("suboptions")[0].style.display = "none";
    }
};
const openTextArea = flag => {
    if (flag) {
        document.getElementsByClassName("txt-area")[0].style.display = "block";
    } else {
        document.getElementsByClassName("txt-area")[0].style.display = "none";
    }
};
const timeSpan = document.getElementById("countdown");

const mins = 10;
const now = new Date().getTime();
const deadline = mins * 60 * 1000 + now;

setInterval(() => {
    var currentTime = new Date().getTime();
    var distance = deadline - currentTime;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes >= 0 && seconds >= 0) {
        timeSpan.innerHTML = minutes + " : " + seconds;
    }
}, 500);
