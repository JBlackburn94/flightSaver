let addToDoButton = document.getElementById('toDo');
let toDoContainer = document.getElementById('container');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    var removeButton = document.createElement('button');
    var completeButton = document.createElement('button');
    
    removeButton.innerText = 'Remove';
    completeButton.innerText = 'Complete';
    paragraph.innerText = inputField.value;
    
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(removeButton);
    toDoContainer.appendChild(completeButton);
    
    removeButton.classList.add('remove-button');
    completeButton.classList.add('complete-button');
    inputField.value = '';
    
    completeButton.addEventListener('click', function() {
        paragraph.style.textDecoration = 'line-through';
    })
    
    removeButton.addEventListener('click', function() {
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
        toDoContainer.removeChild(completeButton);
    })
})
