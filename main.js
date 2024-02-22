"use strict";

// DONE: Set up array of words to test carousel logic
const carouselCollection = ["Bard", "Rogue", "Paladin", "Theif"]

// DONE: get elements from dom
const carouselContent = document.querySelector("#carousel-content")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

let currentSlide = 0
const maxLength = carouselCollection.length - 1;
// DONE: show first element in the array by default
carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`

// DONE: add next logic
function getNextItem() {
  if (currentSlide === maxLength) {
    currentSlide = 0;
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`
  } else {
    currentSlide++
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`
  }
}

// DONE: add previous logic
function getPrevItem() {
  if (currentSlide === 0) {
    currentSlide = carouselCollection.length;
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`
  } else {
    currentSlide -= 1
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`
  }
}
// DONE: set event listeners
nextBtn.addEventListener("click", getNextItem)
prevBtn.addEventListener("click", getPrevItem)

