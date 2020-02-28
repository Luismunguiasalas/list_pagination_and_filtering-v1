/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



let studentList = document.querySelectorAll(".student-item")  //selects all elements with class .student-item
const numberOfItemsOnPage = 10; // sets number of items i want to see on each page

/**
 * Loops throught student list items and changes display value
 * hides all list items other than list items within startIndex and endIndex
 * 
 * @param {list} stdntList - a node list of html elements 
 * @param {number} page - current page
 */

function showPage(stdntList, page) {
   let startIndex = (page * numberOfItemsOnPage) - numberOfItemsOnPage;
   let endIndex = page * numberOfItemsOnPage;

   for (let index = 0; index < stdntList.length; index++) {
      stdntList[index].style.display = "none";
      if (index >= startIndex && index < endIndex) {
         stdntList[index].style.display = "block";
      }
   }
}

/**
 * Creates the necessary elements (div, ul, li, a) for pagination
 * for loop - creates (li, a) for every 10 student items and appends them to parent
 * for loop - Adds on click event listener to every li element
 * nested for loop - removes class attribute from all a elements
 * calls showPage()
 * 
 * @param {list} stdntList - a node list of html elements 
 */

function appendPageLinks(stdntList) {
   let totalPages = Math.ceil(stdntList.length / numberOfItemsOnPage); // get page number
   const divContainer = document.querySelector(".page");  // get paremt div.page container
   const divPagination = document.createElement("div");   // create div pagination container
   const nestedUL = document.createElement("ul");         // create nested ul element
   divPagination.className = "pagination";              // add class to div pagination container 
   divPagination.append(nestedUL);                       // add ul into div pagination container
   divContainer.append(divPagination);  // add div pagination container to parent div.page container 

   for (let index = 0; index < totalPages; index++) {
      const listElement = document.createElement("li"); //create li and a elements for every loop
      const anchorElement = document.createElement("a");
      anchorElement.href = "#"; // adds attribute to a element
      anchorElement.textContent = `${index + 1}`;  // adds text content to a elements
      listElement.append(anchorElement);
      nestedUL.append(listElement) // adds elements to parent ul element
   }

   nestedUL.firstChild.firstChild.className = "active";  // adds class"active" to first anchor element
   const theChildren = divPagination.firstChild.childNodes; // create a list of the li nodes nested in ul element

   for (let index = 0; index < theChildren.length; index++) { // adds event listener to every a element
      theChildren[index].addEventListener("click", function (event) {
         for (let indexx = 0; indexx < theChildren.length; indexx++) {
            theChildren[indexx].firstChild.removeAttribute("class") //on click removes class attribute from all anchor tags
         }
         let thetarget = event.target; // targets a element clicked 
         thetarget.className = "active"; // adds class="active" to the clicked a element.
         showPage(studentList, thetarget.textContent); //calls showPage () with updated arguements
      })
   }
}
showPage(studentList, 1)
appendPageLinks(studentList);