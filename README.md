### Section - 6:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id"): Returns a single element (unique id)

getElementsByClassName("class"): Returns multiple elements (HTMLCollection)

querySelector("selector"): Returns the first matching element

querySelectorAll("selector"): Returns all matching elements (NodeList)

---

## 2. How do you create and insert a new element into the DOM?

Step 1: I will select specific div from the DOM
Ex: let container = document.getElementById("box-container");

Step 2: I will create new new element
Ex: let newElement = document.createElement("div")

Step 3: I will create innerHTML in newElement
Ex: newElement.innerHTML = `<div><h1>This is new text</h1></div>`

Step 4: I will append this newElement into the container
Ex: container.append(newElement)

---

## 3. What is Event Bubbling and how does it work?

When we click a button, the event first triggers on the current element, then it goes up to the parent, then to the upper parent, and so on. This process is called event bubbling (event propagation).

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in JavaScript where instead of adding event listeners to many child elements, we add a single event listener to their parent. The event bubbles up, and we can detect which child triggered it. This is useful because it improves performance, reduces memory usage, and works even for dynamically added elements.

Example:
document.getElementById("parent-container").addEventListener("click",function(e){
if(e.target.classList.contains("btn-button")){
let btnButton = e.target;
console.log(btnButton)
}
});

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() : We can stop the default behavior of an element using preventDefault().
Example:
document.querySelector("form").addEventListener("submit", function(e) {
e.preventDefault();
});

stopPropagation(): We can stop the event from bubbling or capturing to parent elements using stopPropagation().
Example:
document.getElementById("child").addEventListener("click", function(e) {
e.stopPropagation();
});

---
