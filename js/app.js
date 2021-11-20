/**
 * I added the 'top button' and navbar to the top of js file because 
 * whenever I tried getting active class to work, it would break... 
 */ 

// Assign variable to topBtn
const topBtn = document.getElementById("topBtn");
const header = document.querySelector(".page__header");

// fade out the navbar after 2.5 seconds when after scrolling down the page
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 2500);

  // show the top button after scrolling further down the page
  window.scrollY > 900
    ? (topBtn.style.display = "block")
    : (topBtn.style.display = "none");
};

// scrolling to the top : smooth
topBtn.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior:"smooth" });
});

/**
 * Assign sections with their id and data-nav to a make a li
 * and addit to createNavItems function to be able to call it and create
 * the list dynamically no matter how many sections get added
 */
const navbar = document.getElementById("navbar__list");

//Thanks for the IIFE tip! this is awesome!
(function () {
  //This part grabs the section id and data-nav attributes & appends them to navbar
    document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav=${section.dataset.nav} class="menu__link">${section.dataset.nav}</a></li>`;
    navbar.insertAdjacentHTML("beforeend", listItem);
  //This follows with grabing the hrefs, add a listener for each href 
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', function (event) {
          //prevent default action
          event.preventDefault();
          //now for the scroll into view part smoothly
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'});
      });
      // Active class
      window.onscroll = function () {
        document.querySelectorAll('section').forEach((active) => {
          if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 250 
          ) {
            active.classList.add("your-active-class");
          } else {
            active.classList.remove("your-active-class");
          }
        });
      };
    });
    }); 
}) ();
/** This bit of code took me waaaaaaaay longer than it should have... 
 * I was pulling my hair out trying to solve this */



