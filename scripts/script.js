
// set choices of moods for later selection
const moodChoices = document.getElementById("moodChoices");

const journal = document.getElementsByClassName("journal")[0]


// creates an element, creates text element, appends text to element and adds a class
function createContent(element, content, className) {
  elem = document.createElement(element);
  elementContent = document.createTextNode(content);
  elem.appendChild(elementContent);
  elem.className = className;
  return elem
}


// listen for form submission
document.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  let journalDate = document.getElementById("journalDate");
  let concepts = document.getElementById("concepts");
  let journalEntry = document.getElementById("journalEntry");
  let dailyMood = moodChoices.options[moodChoices.selectedIndex];

  //create an object with the input values
  let currentEntry = {
    date: journalDate.value,
    concepts: concepts.value,
    entry: journalEntry.value,
    mood: dailyMood.value,
  }

  let date = ("Date: " + currentEntry.date);
  let conceptsLearned = ("Concepts Covered: " + currentEntry.concepts);
  let journalEntryText = currentEntry.entry;
  let mood = ("I'm Feeling: " + currentEntry.mood);

  let section = document.createElement("section");
  journal.appendChild(section);

  let dateElement = createContent("h3", date, "date");
  section.appendChild(dateElement);

  let conceptElement = createContent("p", conceptsLearned, "concepts");
  section.appendChild(conceptElement);

  let entryElement = createContent("p", journalEntryText, "entry");
  section.appendChild(entryElement);

  let moodElement = createContent("p", mood, "mood");
  section.appendChild(moodElement);


  //  reset form
  journalDate.value = " "
  concepts.value = " "
  journalEntry.value = " "
  moodChoices.selectedIndex = document.getElementById("moodChoices").firstElementChild

})

