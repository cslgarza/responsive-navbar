# Responsive Navbar

This is a template of a basic, responsive navigation bar that highlights
navigation links based on which section is in the viewport focus.

# Usage
1. Implement Font Awesome to your page by adding it to the `<header>` tag.

2. Add an unordered list in the `<nav>` element.
```
<ul id="menu" class="flex">
  <li id="branding"><a href="/">Navbar</a></li>
  <li class="nav-item"><a class="nav-item-link text-black" href="#about">About</a></li>
  <li class="nav-item"><a class="nav-item-link text-black" href="#contact">Contact</a></li>
  <li class="nav-item"><a class="nav-item-link nav-btn-rounded bg-primary text-white" href="#signup">Sign Up</a></li>
  <li id="menu-toggle">
  <a href="#" aria-label="Menu Toggle">
    <i class="fa fa-bars"></i>
  </a>
  </li>
</ul>
```

Each list item in the unordered list should have the class name `nav-item` this
will allow for the addition of a scroll Event Listener to each link in the
menu.

3. Add the reference to the `navbar.js` file at the bottom of the `<script>`
   tag.

4. Add the following JavaScript code add the bottom of the `<body>` element.
```
<script>
  const menu = document.getElementById("menu");
  const toggle = document.getElementById("menu-toggle");

  // Adds an event listener to the mobile menu's toggle button.
  toggle.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileNav(menu, toggle);
    }
  );
</script>
```

5. Add the following to the bottom of the `<body>` tag:
```
<script>
  window.addEventListener("scroll", event => {
    toggleActiveLink(window, document.querySelectorAll("nav ul li.nav-item a"));
  });
</script>
```
