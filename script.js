let count = 1;
document.getElementById("slide_1").style.display = "block";
document.getElementById("slide_2").style.display = "none";

setInterval(function () {
    nextSlide();
}, 3000);

function nextSlide() {
    count = 3 - count; // Toggle between 1 and 2 using 3 - count

    document.getElementById("slide_1").style.display = count === 1 ? "block" : "none";
    document.getElementById("slide_2").style.display = count === 2 ? "block" : "none";
}
