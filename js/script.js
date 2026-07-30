"use strict";

/*==================================================
  FORUM TECHNOLOGIES
  MASTER SCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/*==================================================
  INITIALIZER
==================================================*/

function initializeWebsite(){

    highlightCurrentPage();

    enableSmoothScrolling();

}


/*==================================================
  ACTIVE NAVIGATION
==================================================*/

function highlightCurrentPage(){

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const links =
        document.querySelectorAll(".main-navigation a");

    links.forEach(link=>{

        const page =
            link.getAttribute("href");

        if(page===currentPage){

            link.classList.add("active-page");

        }

    });

}


/*==================================================
  SMOOTH SCROLL
==================================================*/

function enableSmoothScrolling(){

    document.documentElement.style.scrollBehavior="smooth";

}
