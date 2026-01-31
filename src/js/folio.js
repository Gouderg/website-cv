"use strict";

const project_header = document.getElementById("folio_header");
const all_category = [];
const projects_section = document.getElementById("projects_section")

for (let i = 0; i < project_header.children.length; i++) {
    all_category.push(project_header.children.item(i));    
}

// Setup listener to change category.
for (const li_elt of all_category) {
    li_elt.addEventListener('click', () => {
        
        // Remove the css active class.
        for (const li_elt of all_category) {
            li_elt.classList.remove('portfolio-header-active');
        }
        
        // Set the new active class.
        li_elt.classList.add('portfolio-header-active');

        set_visible_project(li_elt.id.split("-")[1])
    })
}


function set_visible_project(type_project) {
    
    for (let i = 0; i < projects_section.children.length; i++) {
        const project = projects_section.children.item(i);
        

        if (type_project === "all") {
            project.style.setProperty("display", "block");
        } else if (project.getAttribute("data-tag").split(";").includes(type_project)) {
            project.style.setProperty("display", "block");
        } else {
            project.style.setProperty("display", "none");
        }
    }

}