function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js=bookmark]");
  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card__bookmark--not-active");
    });
  });
}

export { toggleBookmark };
