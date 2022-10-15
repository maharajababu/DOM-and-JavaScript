/* ----------------------------    1. Topic: DOM selector    ------------------------------------------

// GetElmentById()
const country = document.getElementById("country-visited");
console.log(country);

// GetElementByClassName()
const items = document.getElementsByClassName("lists");
console.log(items);

// GetElementByTagName()
const tag = document.getElementsByTagName("label");
console.log(tag);

// querySelector() -> select the first one
const querySel = document.querySelector("div");
console.log(querySel);

// querySelectorAll() -> select all
const querySelAll = document.querySelectorAll("div");
console.log(querySelAll);
*/

/* ----------------------------    2. Topic: DOM Manipulation    ------------------------------------------

// manipulating id="Title" -> id so (#)hash
const title = document.querySelector("#Title");
console.log(title);
title.style.color = "red";

// manipulating class="lists" -> class so dot

const lists = document.querySelectorAll(".lists");
console.log(lists);
for(i=0; i<lists.length; i++){
    lists[i].style.color = "green";
    lists[i].style.fontSize = "2rem";
}
*/

/* ----------------------------    3. Topic: innerText, textContent, innerHtml    -------------------------

const firstlistitem = document.querySelector(".lists");
console.log(firstlistitem.innerText);
console.log(firstlistitem.textContent);
console.log(firstlistitem.innerHTML);
*/

/* ----------------------------    4. Topic: Creating Elements    ------------------------------------------

// step 1 -> select the element
const u_l = document.querySelector("ul");
console.log(u_l);

// step 2 -> create element
const l_i = document.createElement("li");

// step 2 -> append
u_l.append(l_i);
console.log(l_i);

// step 4 -> Modify text
l_i.innerText = "Paris - Js created element";

// step 5 -> modifying attributes and classes
l_i.setAttribute("id","lists");

l_i.classList.add("lists");

// .remove() - > to remove 
*/

/* ----------------------------    5. Topic: Transverse the DOM   ------------------------------------------ */

/* a. parent node transversal

let ul_ = document.querySelector("ul");
console.log(ul_);
console.log(ul_.parentNode.parentNode);
console.log(ul_.parentElement.parentElement);

const html = document.documentElement;
console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);
*/

/* b. child node transversal

let ul_ = document.querySelector("ul");
console.log(ul_);
console.log(ul_.childNodes);
console.log(ul_.firstChild);
console.log(ul_.lastChild);
*/

/* c. children transversal

let ul_ = document.querySelector("ul");
console.log(ul_);
console.log(ul_.children);
console.log(ul_.firstElementChild);
console.log(ul_.lastElementChild);
*/

/* d. sibling node transversal

let ul_ = document.querySelector("ul");
console.log(ul_.previousSibling);
console.log(ul_.nextSibling);
*/

/* ----------------------------    6. Topic: Event Listener   ------------------------------------------

const btn = document.querySelector(".btn_1");

btn.addEventListener("click", () => {
    alert("hello add event listener called");
});

const bc = document.querySelector(".MouseOverEvent");

bc.addEventListener("mouseover", () => {
    bc.style.backgroundColor = 'blue';
});

const revealbutton = document.querySelector(".btnReveal");
const hiddencontent = document.querySelector(".hiddenContent");

console.log(hiddencontent);

revealbutton.addEventListener("click", () => {
   if(hiddencontent.style.display=="block"){
        hiddencontent.style.display="none";
   }
   else{
        hiddencontent.style.display="block";
   }
});
*/

/* ----------------------------    7. Topic: Event Bubbling   ------------------------------------------

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandparent.addEventListener('click', () => {
    console.log("grandparent clicked");
});

parent.addEventListener('click', () => {
    console.log("parent clicked");
});

child.addEventListener('click', () => {
    console.log("child clicked");
});

document.addEventListener('click', () => {
    console.log("document listener");
});
*/

/* ----------------------------    7. Topic: Event capturing / stop propagation /run once /delegation-----------------------*/
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandparent.addEventListener('click', () => {
    console.log("grandparent clicked");
}
);

parent.addEventListener('click', () => {
    console.log("parent clicked");
});

child.addEventListener('click', () => {
    console.log("child clicked");
});

document.addEventListener('click', () => {
    console.log("document listener");
});




grandparent.addEventListener('click', e => {
    //e.stopPropagation();    
    console.log("grandparent clicked capturing");
}, {once: true}
);

parent.addEventListener('click', () => {
    console.log("parent clicked capturing");
}, {capture: true});

child.addEventListener('click', () => {
    console.log("child clicked capturing");
}, {capture: true}
);

document.addEventListener('click', () => {
    console.log("document listener capturing");
}, {capture: true});