// Enter JavaScript for the exercise here...
window.addEventListener("load", function(e){
    
    const selectedForm = document.querySelector("form")
    const datadisplayed = document.querySelector(".data-to-be-displayed")
    const removeIcon = `<img  src="img/remove.svg" data-index>`;
  
    selectedForm.addEventListener("submit", function(e){
        e.preventDefault();
    })
    const validation = validateSelected(e.target);
    if (validation.valid) {
      const htmlString = createToDoItem(validation);
      addToDoItem(htmlString);
    }
    

})