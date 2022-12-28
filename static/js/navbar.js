/**
 * Contains the code to toggle the mobile navigation menu. 
 */


/**
 * Toggles the mobile navigation menu.
 * 
 * @param {object} menu The element that contains the menu content and links.
 * @param {object} toggle The element used to toggle the mobile menu.
 */
function toggleMobileNav(menu, toggle) {
  if (menu.classList.contains("active-mobile")) {
    closeMobileNav(menu, toggle);
  } else {
    openMobileNav(menu, toggle);
  }
}

/**
 * Opens the mobile navigation menu.
 * 
 * @param {object} menu The element that contains the menu content.
 * @param {object} toggle The element used to toggle the mobile menu.
 */
function openMobileNav(menu, toggle) {
  menu.classList.add("active-mobile");
  toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
}

/**
 * Closes the mobile navigation menu.
 * 
 * @param {object} menu The element that contains the menu content.
 * @param {object} toggle The element used to toggle the mobile menu.
 */
function closeMobileNav(menu, toggle) {
  menu.classList.remove("active-mobile");
  toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>"
}

/**
 * Adds a class to the navigation item link that is related to the currently focused
 * section.
 * @param {object} window The currently opened window in the browser.
 * @param {Array} navLinks The navigation menu items.
 */
function toggleActiveLink(window, navLinks) {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (checkSectionIsFocus(section, fromTop, 10)) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

/**
 * Checks if the given section is in the viewport focus.
 * 
 * @param {object} section 
 * @param {number} fromTop 
 * @param {number} offsetAdjustment 
 */
function checkSectionIsFocus(section, fromTop, offsetAdjustment) {
  return section.offsetTop - offsetAdjustment <= fromTop && section.offsetTop + section.offsetHeight > fromTop
}