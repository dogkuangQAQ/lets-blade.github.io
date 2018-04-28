"use strict";

/* eslint-disable */

if (location.hash.substring(1).startsWith(encodeURIComponent("{"))) {
  location.pathname = "/playground/";
}

window.addEventListener("load", function() {
  // We don't have access to a unique body css attribute for just the homepage
  // so instead it is set on load. It's only really visible on a vertical overscroll
  document.body.style.backgroundColor = "rgb(24, 32, 37)";

  var logo = document.querySelector(".prettier-logo-wide");

  function handleLogoDrag(event) {
    logo.classList.add("rolling");
    event.preventDefault();
  }

  var mavenButton = document.querySelector(".showMavenButton");
  var gradleButton = document.querySelector(".showGradleButton");
  var getStartedSection = document.querySelector(".getStartedSection");

  gradleButton.addEventListener("click", function(event) {
    event.preventDefault();
    gradleButton.classList.add("active");
    mavenButton.classList.remove("active");
    getStartedSection.classList.add("getStartedSection--gradle");
  });
  mavenButton.addEventListener("click", function(event) {
    event.preventDefault();
    mavenButton.classList.add("active");
    gradleButton.classList.remove("active");
    getStartedSection.classList.remove("getStartedSection--gradle");
  });
});
