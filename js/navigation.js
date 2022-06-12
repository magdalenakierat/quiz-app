function navigation() {
  const linkHome = document.querySelector("[data-js=link-home]");
  const linkBookmarks = document.querySelector("[data-js=link-bookmarks]");
  const linkInput = document.querySelector("[data-js=link-input]");
  const linkProfile = document.querySelector("[data-js=link-profile]");

  const pageHome = document.querySelector("[data-js=home]");
  const pageBookmarks = document.querySelector("[data-js=bookmarks]");
  const pageInput = document.querySelector("[data-js=input]");
  const pageProfile = document.querySelector("[data-js=profile]");

  const h1Content = document.querySelector("[data-js=h1-content]");

  const allPages = document.querySelectorAll(".page");

  linkHome.addEventListener("click", () => {
    allPages.forEach((page) => {
      page.classList.remove("current-page");
    });
    pageHome.classList.add("current-page");
    h1Content.innerHTML = "QUIZ APP";
  });

  linkBookmarks.addEventListener("click", () => {
    allPages.forEach((page) => {
      page.classList.remove("current-page");
    });
    pageBookmarks.classList.add("current-page");
    h1Content.innerHTML = "QUIZ APP – Bookmarks";
  });

  linkInput.addEventListener("click", () => {
    allPages.forEach((page) => {
      page.classList.remove("current-page");
    });
    pageInput.classList.add("current-page");
    h1Content.innerHTML = "QUIZ APP – Create";
  });

  linkProfile.addEventListener("click", () => {
    allPages.forEach((page) => {
      page.classList.remove("current-page");
    });
    pageProfile.classList.add("current-page");
    h1Content.innerHTML = "QUIZ APP – Profile";
  });
}

export { navigation };
