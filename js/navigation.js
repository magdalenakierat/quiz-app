function navigation() {
  const linkHome = document.querySelector("[data-js=link-home]");
  const linkBookmarks = document.querySelector("[data-js=link-bookmarks]");
  const linkInput = document.querySelector("[data-js=link-input]");
  const linkProfile = document.querySelector("[data-js=link-profile]");

  const pageHome = document.querySelector("[data-js=home]");
  const pageBookmarks = document.querySelector("[data-js=bookmarks]");
  const pageInput = document.querySelector("[data-js=input]");
  const pageProfile = document.querySelector("[data-js=profile]");

  linkHome.addEventListener("click", () => {
    pageHome.classList.add("current-page");
    pageBookmarks.classList.remove("current-page");
    pageInput.classList.remove("current-page");
    pageProfile.classList.remove("current-page");
  });

  linkBookmarks.addEventListener("click", () => {
    pageHome.classList.remove("current-page");
    pageBookmarks.classList.add("current-page");
    pageInput.classList.remove("current-page");
    pageProfile.classList.remove("current-page");
  });

  linkInput.addEventListener("click", () => {
    pageHome.classList.remove("current-page");
    pageBookmarks.classList.remove("current-page");
    pageInput.classList.add("current-page");
    pageProfile.classList.remove("current-page");
  });

  linkProfile.addEventListener("click", () => {
    pageHome.classList.remove("current-page");
    pageBookmarks.classList.remove("current-page");
    pageInput.classList.remove("current-page");
    pageProfile.classList.add("current-page");
  });
}

export { navigation };
