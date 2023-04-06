const message = 'A village Hidden in the leaves' // Try edit me
// Update header text
document.querySelector('#header').innerHTML = message
// Log to console
console.log(message)


// get document element
const h1 = document.querySelector("h1");
console.log(h1);
// add eventlistener 
h1.addEventListener("click", (e) => {
  h1.classList.toggle("active");
});



// get switch elements
const body = document.querySelector("body");
const hiddenContainer = document.querySelector("#cont-2");
const toggleContainer = document.querySelector("#cont-1");
console.log(toggleContainer);
const switchIndicator = document.querySelector("#toggle-indicator");
console.log(switchIndicator);

// add event Listener click , then toggle

switchIndicator.addEventListener("click", (e) => {
   switchIndicator.classList.toggle("switch-on");
   body.classList.toggle("light");
   toggleContainer.classList.toggle("container-light");
   hiddenContainer.classList.toggle("visible");
   
   // checks if container is hidden and leaf indicator is "off"/"flex-start" and makes sure the link doesnt bug out 
const hiddenContainerStatus = window.getComputedStyle(hiddenContainer);
console.log(hiddenContainerStatus.visibility);
const switchIndicatorStatus = window.getComputedStyle(switchIndicator);
console.log(switchIndicatorStatus.alignSelf);

if (hiddenContainerStatus.visibility === "hidden" && switchIndicatorStatus.alignSelf === "flex-start") {
  console.log(hiddenContainerStatus.visibility);
  aLink.style.visibility = "hidden";
  sizeLabel.innerText = "Size:";
  userInput.value = "";
  sizeInput.value = "";
  };
});

// input labels
const urlLabel = document.querySelector("#label-user-input");
const sizeLabel = document.querySelector("#label-size-input");

// user input elements 
const userInput = document.querySelector("#user-input");
console.log(userInput);
const sizeInput = document.querySelector("#size-input");
console.log(sizeInput);
const submitBtn = document.querySelector("#sub-btn");
console.log(submitBtn);


// output element 
const aLink = document.querySelector("#target-link");
console.log(aLink);

// submitBtn onclick 
submitBtn.onclick = function() {
  submitBtn.style.backgroundColor = "azure";
  let input = userInput.value;
  let size = sizeInput.value;
  console.log({input}, {size});
  let newSize = `=s${size}`;
  console.log({newSize});
 
// before size replace capture default size value
  const regex = /=s(\d+)/i;
  let regexMatches = input.match(regex);
  console.log(regexMatches);  // array of regex match and capture group
  let defaultSize = regexMatches[1];
  console.log({defaultSize}, defaultSize);  // default size
//replace size value
  let newLink = input.replace(regex, newSize);
  console.log(newLink);  
  
// display defalt size value 
  sizeLabel.innerText = `Size: Default= ${defaultSize}`;

// sets the new link href to <a> tag
  console.log(aLink.href);
  aLink.setAttribute("href", newLink);
  console.log(aLink.href);


// displays  link to user after input is received
  aLink.style.visibility = "visible";
  console.log(aLink.style.visibility);
};

