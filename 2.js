const koreanCharacters = [
  "ㅏ",
  "ㅑ",
  "ㅓ",
  "ㅕ",
  "ㅗ",
  "ㅛ",
  "ㅜ",
  "ㅠ",
  "ㅡ",
  "ㅣ",
  "ㅐ / ㅔ",
  "ㅒ / ㅖ",
  "ㅘ",
  "ㅙ / ㅚ / ㅞ",
  "ㅝ",
  "ㅟ",
  "ㅢ",
];
const englishPronunciations = [
  "a",
  "ya",
  "eo",
  "yeo",
  "o",
  "yo",
  "u",
  "yu",
  "eu",
  "i",
  "ae",
  "yae",
  "wa",
  "wae",
  "wo",
  "wi",
  "ui",
];

let currentIndex = 0;

const koreanCharacterElement = document.querySelector(".korean-character");
const englishPronunciationElement = document.querySelector(
  ".english-pronunciation"
);
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const resetButton = document.getElementById("reset");

function updateCharacter() {
  koreanCharacterElement.textContent = koreanCharacters[currentIndex];
  englishPronunciationElement.textContent = englishPronunciations[currentIndex];
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % koreanCharacters.length;
  updateCharacter();
});

prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + koreanCharacters.length) % koreanCharacters.length;
  updateCharacter();
});

resetButton.addEventListener("click", () => {
  currentIndex = 0;
  updateCharacter();
});

// Initialize on page load
updateCharacter();
