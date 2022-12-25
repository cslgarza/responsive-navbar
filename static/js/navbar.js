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