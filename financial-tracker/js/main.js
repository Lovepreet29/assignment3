// Enter JavaScript for the exercise here...
window.addEventListener("load", function(e){
    
    const selectedForm = document.querySelector("form")
    const datadisplayed = document.querySelector(".data-to-be-displayed")
    const removeIcon = `<img  src="img/remove.svg" data-index>`;
  
    selectedForm.addEventListener("submit", function(e){
        e.preventDefault();
    
    const validation = validateSelected(e.target);
    if (validation.valid) {
      const htmlString = createToDoItem(validation);
      addToDoItem(htmlString);
    }
})

function addToDoItem(htmlString){
  const makeIndex = datadisplayed.children.length;
  let makeNodeFromText = document
  .createRange()
  .createContextualFragment(htmlString);

  let row = makeNodeFromText.querySelector("tr");
  let image = row.querySelector("img");
  image.dataset.index = makeIndex;
  datadisplayed.appendChild(row);
  addListenerToImage(image);
  updateTotalTime()
}
  function updateTotalTime(){
    
  }
  function addListenerToImage(image){
    image.addEventListener("click", removeToDoItem);
    
  }
  function removeToDoItem(e){
    let TobeDone = datadisplayed.querySelectorAll("tr")
    const index = e.target.dataset.index;
    const nodeToRemove = TobeDone[index];
    let result = confirm("Are you sure, You want to Delete this Data?")
    datadisplayed.removeChild(nodeToRemove);
    TobeDone = datadisplayed.querySelectorAll("tr")
    TobeDone.forEach((item, index) => {
      item.querySelectorAll("img").dataset.index = index;
    })
    console.log(result)
  }
  

    function createToDoItem(shownData){
      const Element =
      `
      <table>
      <tr>
        <td class = "what-todo">${shownData.todo}</td>
        <td class = "category">${shownData.type}</td>
        <td class = "spend">${shownData.spend}</td>
        <td class="remove"> ${removeIcon} </td>
      </tr>
      </table>
      `;
      return Element;
    }

    function validateSelected(theform){
      const itemDone = {};
      let errorCount = 0;
      if(theform.elements.todo.value.trim() !== ""){
        itemDone.todo = theform.elements.todo.value;
      }

      if (theform.elements.type.value.trim() !== "") {
        itemDone.type = theform.elements.type.value;
      }
      if (theform.elements.spend.value !== 0) {
        itemDone.spend = parseFloat(theform.elements.spend.value).toFixed(2);
      }
      if(errorCount === 0){
        itemDone.valid = true;
        return itemDone;
      }
    }
})