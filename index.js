// Menu toggle

/** When someone click the hamburger button
 * - if the menu is colsed, open it
 * - if the menu is open, close it
 */

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// Add the event listener for clicking the button
navToggle.addEventListener('click', () => {
  const visiblity = nav.getAttribute('data-visible');

  if (visiblity === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
