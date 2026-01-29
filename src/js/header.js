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