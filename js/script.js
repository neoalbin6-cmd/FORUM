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

    initializeScrollReveal();

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

setTimeout(()=>{

    loader.remove();

},900);
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

/*==================================================
  SCROLL PROGRESS
==================================================*/

function initializeScrollProgress(){

    const progressBar=
    document.querySelector(".scroll-progress-bar");

    if(!progressBar){

        return;

    }

    window.addEventListener("scroll",()=>{

        const scrollTop=
        window.scrollY;

        const pageHeight=

        document.documentElement.scrollHeight-

        window.innerHeight;

        const progress=

        (scrollTop/pageHeight)*100;

        progressBar.style.width=

        progress+"%";

    },{passive:true});

}

/*==================================================
  SCROLL REVEAL
==================================================*/

function initializeScrollReveal(){

    const elements=
    document.querySelectorAll(".content-section");

    elements.forEach((element,index)=>{

        element.classList.add("reveal");

        const delay=(index%4)+1;

        element.classList.add(`reveal-delay-${delay}`);

    });

    const observer=
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.15,

        rootMargin:"0px 0px -40px 0px"

    });

    elements.forEach(element=>{

        observer.observe(element);

    });

}
