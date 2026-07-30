"use strict";

/*==================================================
  FORUM TECHNOLOGIES
  MASTER SCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/*==================================================
  INITIALIZE
==================================================*/

function initializeWebsite(){

    initializeLoader();

    highlightCurrentPage();

    enableSmoothScrolling();

}


/*==================================================
  PAGE LOADER
==================================================*/

function initializeLoader(){

    const loader=document.querySelector(".page-loader");

    if(!loader){

        return;

    }

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.classList.add("loader-hidden");

        },1200);

    });

}


/*==================================================
  ACTIVE PAGE
==================================================*/

function highlightCurrentPage(){

    const currentPage=
    window.location.pathname.split("/").pop()||"index.html";

    const links=
    document.querySelectorAll(".main-navigation a");

    links.forEach(link=>{

        if(link.getAttribute("href")===currentPage){

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
