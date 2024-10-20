// 1
const content = (document.getElementById("content").textContent =
  "Content has been changed");

// 2
const list = document.getElementById("list");
const listElem = document.createElement("li");
listElem.textContent = "Item 2";
list.appendChild(listElem);

// 3
const hideBtn = document.getElementById("hide");
const textHide = (document.getElementById("text-hide").style.display = "block");

const toggleHide = () => {
  const textHide = document.getElementById("text-hide");
  if (textHide.style.display === "block") {
    textHide.style.display = "none";
    hideBtn.textContent = "Show Content";
  } else {
    textHide.style.display = "block";
    hideBtn.textContent = "Hide";
  }
};
hideBtn.addEventListener("click", toggleHide);

// 4
const elemRemove = document.getElementById("elemRemove");
// elemRemove.remove();

// 5
// const changeBg=document.querySelectorAll('.changeBg'); //returns array
// changeBg.forEach((elem)=>{
//     elem.style.background='yellow'
// })
const changeBg = document.getElementsByClassName("changeBg"); //returns html collection
Array.from(changeBg).forEach((elem) => {
  elem.style.background = "yellow";
});

// 6
const EL = document.getElementById("EL");
const ELAdded = () => {
  alert("Event Listener has been added successfully");
};
EL.addEventListener("click", ELAdded);

// 7
// const replaceContainer=document.getElementById('replaceContainer');
const replace = document.getElementById("replace");
// replace.remove();
// const replacedElem=document.createElement('h4');
// replacedElem.innerText="Replaced Element's content";
// replacedElem.classList.add('replaced-content');
// replaceContainer.appendChild(replacedElem);

const newElem = document.createElement("h5");
newElem.innerText = "Replaced content here!";
replace.parentNode.replaceChild(newElem, replace);

// 8
const originalElement = document.getElementById("originalElement");
for (let i = 0; i < 4; i++) {
  const clonedElement = originalElement.cloneNode(true);
  originalElement.parentNode.appendChild(clonedElement);
}

// 9

const inputVal = () => {
  const userInput = document.getElementById("userInput");
  const val = userInput.value;
  console.log(val);
};
userInput.addEventListener("keypress", inputVal);

// 10
const submitForm = document.getElementById("submitForm");
submitForm.onclick = () => {
  // submitForm.classList.add('disable-btn');
  submitForm.disabled = true;
};
