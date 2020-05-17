window.addEventListener("load", start);

var dataNames = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis"];
var inputName = null;
var isEditing = false
var currentIndex =  null

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    dataNames.push(newName);
  }

  function updateName(newName) {
    dataNames[currentIndex] = newName
  }

  
  function handleTyping(event) {
    if (inputName.value !== '' && event.key === "Enter") {
      if (isEditing) {
        updateName(event.target.value)
      } else {
        insertName(event.target.value);
      }
      isEditing = false
      clearInput()
      render()
    }

  }

  inputName.addEventListener('keyup', handleTyping);
  inputName.focus();

}

function render() {

  function createDeleteButton(index) {
    function deleteName() {
      dataNames.splice(index, 1)
      render()
    }

    var button = document.createElement('button')
    button.classList.add('deleteButton')
    button.textContent = 'x'

    button.addEventListener('click', deleteName)
    return button
  }

  function spanCreate(name, index) {
    function editItem () {
      inputName.value = name
      inputName.focus()
      isEditing = true
      currentIndex = index

    }
    var span = document.createElement('span')
    span.classList.add('clickable')
    span.textContent = name
    span.addEventListener('click', editItem)

    return span
  }


  var divNames = document.querySelector('#names')
  divNames.innerHTML = ''

  // criar ul e li 
  var ul = document.createElement('ul')

  for (var i = 0; i < dataNames.length; i++) {
    var currentName = dataNames[i]
    var li = document.createElement('li')

    var button = createDeleteButton(i)
    var span = spanCreate(currentName, i)

    

    li.appendChild(button)
    li.appendChild(span)
    ul.appendChild(li)
  }


  divNames.appendChild(ul)
  clearInput()
}

function clearInput() {
  inputName.value = ''
  inputName.focus()
}