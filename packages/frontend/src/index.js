const { isNonEmptyString } = require("@sonar-monorepo/utils");

/**
 * Renders a greeting message into a DOM element.
 * @param {string} name
 * @param {HTMLElement} container
 */
function renderGreeting(name, container) {
  if (!isNonEmptyString(name)) {
    container.textContent = "Hello, stranger!";
    return;
  }
  container.textContent = `Hello, ${name}!`;
}

/**
 * Toggles a CSS class on an element.
 * @param {HTMLElement} element
 * @param {string} className
 */
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

module.exports = { renderGreeting, toggleClass };
