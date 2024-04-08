document.getElementById('add-task-btn').addEventListener('click', async function () {
  const inputField = document.createElement('input'); // Add input field for new task.
  inputField.type = 'text'; // Define input type.
  inputField.classList.add('task-item-input'); // Add class for input.

  const deleteBtn = document.createElement('button'); // Add button for delete item.
  deleteBtn.textContent = 'Delete'; // Added text on button.
  deleteBtn.classList.add('delete-btn'); // Added class for delete button.

  const taskList = document.getElementById('task-list'); // Get the id of listing.
  const newTaskItem = document.createElement('li'); // Create element of li for new task.
  newTaskItem.appendChild(inputField); // Append input for li.
  newTaskItem.appendChild(deleteBtn); // Append button for li.
  taskList.appendChild(newTaskItem); // Append both the items, input and button on new task inside the task-list.

  inputField.focus(); // Redirect to the newly added input field.

  inputField.addEventListener('change', function() { // Input change event.
    const taskText = document.createElement('div'); // Create new div.
    taskText.textContent = inputField.value; // Store input value in div.
    newTaskItem.insertBefore(taskText, inputField); // Insert new 'taskText' field before an existing 'inputField' field.
    newTaskItem.removeChild(inputField); // Remove the 'inputField' field.
  });

  deleteBtn.addEventListener('click', function() { // Delete button click event.
    taskList.removeChild(newTaskItem); // Remove task into the tasklist.
  });
});

async function fetchData() { // Fetch async data function.
  try {
    const response = await fetch('todo_list.json'); // Fetch json API using await.
    const data = await response.json(); // Store all response data array in 'data'.
    console.log(data);
    const taskList = document.getElementById('task-list'); // Get element ID.
    data.todo_list.forEach(task => {
      const newTaskItem = document.createElement('li'); // Create element 'li'.
      const taskText = document.createElement('div'); // Create element 'div'.
      taskText.textContent = task.title; // data title value store in 'div'.

      const deleteBtn = document.createElement('button'); // Create button.
      deleteBtn.textContent = 'Delete'; // Assign delete button text.
      deleteBtn.classList.add('delete-btn'); // Add class for delete button.

      newTaskItem.appendChild(taskText); // Append 'div' inside the li.
      newTaskItem.appendChild(deleteBtn); // Append 'delete button' inside the li.
      taskList.appendChild(newTaskItem); // Append 'li' inside the 'task-list'.

      deleteBtn.addEventListener('click', function() { // Delete button click.
        taskList.removeChild(newTaskItem); // Remove task in to the task-list.
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error); // Error, if the json response have some error.
  }
}

fetchData();
