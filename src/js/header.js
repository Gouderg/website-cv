"use strict";

const about_section = document.getElementById("about");
const resume_section = document.getElementById("resume");
const folio_section = document.getElementById("portfolio");

const about_header = document.getElementById("about_header");
const resume_header = document.getElementById("resume_header");
const folio_header = document.getElementById("portfolio_header");

about_header.style.setProperty("color", "var(--orange-100)");
resume_section.style.setProperty("display", "none");
folio_section.style.setProperty("display", "none");

about_header.addEventListener('click', () => {
    about_header.style.setProperty("color", "var(--orange-100)");
    resume_header.style.setProperty("color", "var(--white-600)");
    folio_header.style.setProperty("color", "var(--white-600)");

    resume_section.style.setProperty("display", "none");
    folio_section.style.setProperty("display", "none");
    about_section.style.setProperty("display", "flex");
});

resume_header.addEventListener('click', () => {
    about_header.style.setProperty("color", "var(--white-600)");
    resume_header.style.setProperty("color", "var(--orange-100)");
    folio_header.style.setProperty("color", "var(--white-600)");

    resume_section.style.setProperty("display", "flex");
    folio_section.style.setProperty("display", "none");
    about_section.style.setProperty("display", "none");
});

folio_header.addEventListener('click', () => {
    about_header.style.setProperty("color", "var(--white-600)");
    resume_header.style.setProperty("color", "var(--white-600)");
    folio_header.style.setProperty("color", "var(--orange-100)");

    resume_section.style.setProperty("display", "none");
    folio_section.style.setProperty("display", "flex");
    about_section.style.setProperty("display", "none");
});



const side_show = document.getElementById("side-arrow");
const side_contact = document.getElementById("side-contacts");
const side_separation = document.getElementById("side-separation");
const side_icons = document.getElementById("side-container-icons");
const side_container = document.getElementById("side")

side_show.addEventListener('click', () => {
    side_contact.classList.toggle('side-show');
    side_separation.classList.toggle('side-show');
    side_icons.classList.toggle('side-show');

    if (window.outerWidth <= 580) {
        if (side_contact.classList.contains('side-show')) {
            side_container.classList.add("side-max-width-min-content");
            side_container.classList.remove("side-min-width-max-content");
        } else {
            side_container.classList.remove("side-max-width-min-content");
            side_container.classList.add("side-min-width-max-content");
        }
    } else {
        side_container.classList.remove("side-max-width-min-content");
        side_container.classList.remove("side-min-width-max-content");
    }
    console.log()
})