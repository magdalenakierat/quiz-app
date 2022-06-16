function navigation() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-js=nav-link]');
  const headline = document.querySelector('[data-js=h1-content]');

  navLinks.forEach((navLink) => { // für jedes element mit dem data-js=nav-link
    navLink.addEventListener('click', () => { // führe auf click, folgende steps aus:
      const selectedPage = document.querySelector( 
        `[data-js=${navLink.dataset.link}]` 
      ); // das Element mit dem gleichen data-js-value wie das Element mit dem data-link-value (e.g. data-js=home und data-link=home)
      pages.forEach((page) => { // für jedes Element mit der class=page
        page.classList.remove('current-page');
      }); // entferne die class=current-page
      selectedPage.classList.add('current-page'); // füge dem Element mit dem data-js-value, das dem data-link-value (e.g. home) entspricht, die class=current-page hinzu
      headline.textContent = navLink.dataset.headline; // füge dem Element mit dem data-js=h1-content den data-headline-value vom element mit dem data-js=nav-link hinzu (e.g. QUIZ APP)
    });
  });
}

export { navigation };
