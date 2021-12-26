// Accordion
const accordion = document.querySelectorAll(".accordion");
const icon = document.querySelectorAll(".accordion__link");
const content = document.querySelectorAll(".content");
const textColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-darkblue');

// loop through accordion items
for (let i = 0; i < accordion.length; i++) {
    // event listener on click
    accordion[i].addEventListener("click", function () {
        if (window.getComputedStyle(content[i]).display === "none") {
            // functional
            content[i].style.display = "block";
            icon[i].firstElementChild.className = "fas fa-angle-up";
            // styling
            accordion[i].style.color = textColor;
            accordion[i].style.fontWeight = "bold";
        } else
        if (window.getComputedStyle(content[i]).display === "block") {
            // functional
            content[i].style.display = "none";
            icon[i].firstElementChild.className = "fas fa-angle-down";
            // styling
            accordion[i].style.fontWeight = "normal";
        }
    });
}