/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

let studentList = document.querySelectorAll(".student-item")  //selects all elements with class .student-item
const numberOfItemsOnPage = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

function showPage(stdntList, page) {

   let startIndex = (page * numberOfItemsOnPage) - numberOfItemsOnPage;
   let endIndex = page * numberOfItemsOnPage;

   for (let index = 0; index < stdntList.length; index++) {
      stdntList[index].style.display = "none";   //changes the display property for each student Item,
      if (index >= startIndex && index < endIndex) {
         stdntList[index].style.display = "block";
      }
   }

}

showPage(studentList, 6);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/


function appendPageLinks(stdntList) {
   let totalPages = Math.ceil(stdntList.length / numberOfItemsOnPage); // get page number
   let divContainer = document.querySelector(".page");  // get div.page container
   let divPagination = document.createElement("div");   // create div pagination container
   let nestedUL = document.createElement("ul");
   // let liElement = document.createElement("li");
   // let aElement = document.createElement("a");        // create nested ul element for pagination div
   divPagination.className = "pagination";              // 
   divPagination.append(nestedUL);
   // nestedUL.append("") // testing nestedUL
   // divContainer.append(divPagination);

   for (let index = 0; index < totalPages; index++) {
      let liElement = document.createElement("li");
      let aElement = document.createElement("a");
      // aElement.className = "active";
      // aElement.onclick = ""
      aElement.href = "#";
      aElement.textContent = `${index + 1}`;
      liElement.append(aElement);
      nestedUL.append(liElement)
   }
   nestedUL.firstChild.firstChild.className = "active";
   // document.querySelector(".pagination ul li a")
   // let alll = document.querySelectorAll(".pagination ul li a")

   // alll.addEventListener("click", function () {
   //    console.log("hello");
   // });
   for (let index = 0; index < totalPages; index++) {
      nestedUL.firstChild.firstChild.addEventListener("click", function () {
         console.log("hellow");
      })
   }

   // console.log(divContainer);   testing divContainer

   // let total = Math.ceil(stdntList.length / numberOfItemsOnPage);
   // console.log(total);  // testing total variable

   divContainer.append(divPagination);
}

appendPageLinks(studentList);
// function appendPageLinks(studentList) {
//    let total = Math.floor(studentListItem.length / numberOfItemsOnPage);
//    // console.log(total);
//    let siblingElem = document.querySelector(".student-list");
//    // console.log(siblingElem);
//    siblingElem.insertAdjacentHTML("afterend", '<div class="pagination"></div>');
//    let paginationElem = document.querySelector(".pagination");
//    let string = `<ul>`;



//    // paginationElem.innerHTML += `<ul>`;

//    // paginationElem.innerHTML += `</ul>`;

//    for (let index = 0; index < total; index++) {

//       let element = document.createElement("li").innerHTML = `<li><a class="active" href="#">1</a></li>`
//       element.addEventListener()
//       string += `<li><a class="active" href="#">1</a></li>`
//    }


// }

// appendPageLinks(studentListItem);


// Remember to delete the comments that came with this file, and replace them with your own code comments.