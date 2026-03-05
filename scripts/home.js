
// Authentication Protection


if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.replace("index.html");
}


//  Logout
document.getElementById("logout-btn")
  .addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    window.location.replace("index.html");
  });



// Helper Functions
const manageSpinner = (status) => {
  const spinner = document.getElementById("spinner");
  const wordContainer = document.getElementById("word-container");

  if (status === true) {
    spinner.classList.remove("hidden");
    wordContainer.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    wordContainer.classList.remove("hidden");
  }
};

const removeActive = () => {
  document.querySelectorAll(".lesson-btn")
    .forEach(btn => btn.classList.remove("active"));
};

const createElements = (arr) =>
  arr.map(el => `<span class="btn btn-sm">${el}</span>`).join(" ");


// Load Lessons
const loadLessons = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
  const data = await res.json();
  displayLesson(data.data);
};

const displayLesson = (lessons) => {
  const container = document.getElementById("level-container");
  container.innerHTML = "";

  lessons.forEach(lesson => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline btn-primary lesson-btn";
    btn.innerHTML = `<i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}`;
    btn.onclick = () => loadLevelWord(lesson.level_no);
    btn.id = `lesson-btn-${lesson.level_no}`;
    container.appendChild(btn);
  });
};


// Load Words by Level
const loadLevelWord = async (id) => {
  manageSpinner(true);

  const res = await fetch(`https://openapi.programming-hero.com/api/level/${id}`);
  const data = await res.json();

  removeActive();
  document.getElementById(`lesson-btn-${id}`)
    .classList.add("active");

  displayLevelWord(data.data);
};

const displayLevelWord = (words) => {
  const container = document.getElementById("word-container");
  container.innerHTML = "";

  if (words.length === 0) {
    container.innerHTML =
      `<div class="col-span-full text-center py-10">
        <h2 class="text-2xl">এখনও কোনো শব্দ যোগ করা হয়নি।</h2>
        
      </div>`;
    manageSpinner(false);
    return;
  }

  words.forEach(word => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-sm text-center py-6 px-4 space-y-4";

    card.innerHTML = `
      <h2 class="font-bold text-xl">${word.word}</h2>
      <p>${word.meaning}</p>
      <div class="flex justify-center gap-3">
        <button class="btn btn-sm"
          onclick="loadWordDetail(${word.id})">
          <i class="fa-solid fa-circle-info"></i>
        </button>
        <button class="btn btn-sm"
          onclick="soundOfWord('${word.word}')">
          <i class="fa-solid fa-volume-high"></i>
        </button>
       

      </div>
    `;

    container.appendChild(card);
  });

  manageSpinner(false);
};

// sound of word
function soundOfWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}


// Word Details
const loadWordDetail = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/word/${id}`);
  const data = await res.json();
  displayWordDetails(data.data);
};

const displayWordDetails = (word) => {
  document.getElementById("details-container").innerHTML = `
    <h2 class="text-xl font-bold">${word.word}</h2>
    <p><strong>Meaning:</strong> ${word.meaning}</p>
    <p><strong>Example:</strong> ${word.sentence}</p>
    <div><strong>Synonyms:</strong> ${createElements(word.synonyms)}</div>
  `;
  document.getElementById("word_modal").showModal();
};


// Search
document.getElementById("btn-search")
  .addEventListener("click", async () => {

    const value =
      document.getElementById("input-search")
        .value.trim().toLowerCase();

    const res =
      await fetch("https://openapi.programming-hero.com/api/words/all");
    const data = await res.json();

    const filtered =
      data.data.filter(word =>
        word.word.toLowerCase().includes(value)
      );

    displayLevelWord(filtered);
  });


loadLessons();