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
    let todos = datadisplayed.querySelectorAll("tr")
    const index = e.target.dataset.index;
    const nodeToRemove = todos[index];
    datadisplayed.removeChild(nodeToRemove);
    todos = datadisplayed.querySelectorAll("tr")
    todos.forEach((item, index) => {
      console.log((item.querySelectorAll("img").dataset.index = index));
    })
  }

    function createToDoItem(newToDo){
      const todoElement =
      `
      <table>
      <tr>
        <td class = "what-todo">${newToDo.todo}</td>
        <td class = "category">${newToDo.type}</td>
        <td class = "spend">${newToDo.spend}</td>
        <td class="remove"> ${removeIcon} </td>
      </tr>
      </table>
      `;
      return todoElement;
    }

    function validateSelected(theform){
      const todoItem = {};
      let errorCount = 0;
      if(theform.elements.todo.value.trim() !== ""){
        todoItem.todo = theform.elements.todo.value;
      }

      if (theform.elements.type.value.trim() !== "") {
        todoItem.category = theform.elements.type.value;
      }
  
      if (theform.elements.spend.value !== 0) {
        todoItem.time = parseFloat(theform.elements.spend.value).toFixed(2);
      }
      if(errorCount === 0){
        todoItem.valid = true;
        return todoItem;
      }
    }
})