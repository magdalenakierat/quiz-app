function navigation() {
  const pages = document.querySelectorAll(".page");
  const navLinks = document.querySelectorAll("[data-js=nav-link]");
  const headline = document.querySelector("[data-js=h1-content]");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      const selectedPage = document.querySelector(
        `[data-js=${navLink.dataset.link}]`
      );
      pages.forEach((page) => {
        page.classList.remove("current-page");
      });
      selectedPage.classList.add("current-page");
      headline.textContent = navLink.dataset.headline;
    });
  });
}

export { navigation };
