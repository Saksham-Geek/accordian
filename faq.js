const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let accordianBody;
const faqs = [];

faqData.forEach((item) => {  // looping throught the faqData array of objects

  //  creating the element -- div -- green section
  let faq = document.createElement("div") ;
  // adding class to the faq div created above
  faq.classList.add("faq") ;

 //  creating the element -- div -- for button
  let showbutton = document.createElement("div") ;
  //  adding class to the button div
  showbutton.classList.add("show_btn") ;
  // setting '' As textContent
  showbutton.textContent = "+" ;

//  creating the element -- section -- header 
  let faqHeader = document.createElement("section") ;

// adding class to the header section
  faqHeader.classList.add("faq_header") ;

// setting the text for faqHeader : question
  faqHeader.textContent = item.question ;

// appending (attaching) showbutton in the header 
  faqHeader.append(showbutton) ;

//   creating the element -- section -- inner area for data : hidden
  let hiddendata = document.createElement("section")

  //  adding hidden class to the section
  hiddendata.classList.add("hidden");
  //  setting text to the hidden section : answer
  hiddendata.textContent = item.answer

  //  appending (attaching) faqHeader and hiddendata in faq section
  faq.appendChild(faqHeader)
  faq.appendChild(hiddendata)

  //  appending (attaching) faq to the accordian_body class
  document.querySelector(".accordian_body").appendChild(faq)


  // condition to display or hide the hiddendata section -- if true : display - block ; else : display - none ;
  let isOpen = true
  showbutton.addEventListener("click", () => {
      if(isOpen){
        hiddendata.style.display = "block"
        showbutton.textContent = "-" ;
        isOpen = false        
      } else {
        hiddendata.style.display = "none"
        isOpen = true
      }
  })
})
