export async function addTask() {
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.classList.add('task-item-input');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  const taskList = document.getElementById('task-list');
  const newTaskItem = document.createElement('li');
  newTaskItem.appendChild(inputField);
  newTaskItem.appendChild(deleteBtn);
  taskList.appendChild(newTaskItem);

  inputField.focus();

  inputField.addEventListener('change', function() {
    const taskText = document.createElement('div');
    taskText.textContent = inputField.value;
    newTaskItem.insertBefore(taskText, inputField);
    newTaskItem.removeChild(inputField);
  });

  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(newTaskItem);
  });
}

export async function fetchData() {
  try {
    const response = await fetch('todo_list.json');
    const data = await response.json();
    console.log(data);
    const taskList = document.getElementById('task-list');
    data.todo_list.forEach(task => {
      const newTaskItem = document.createElement('li');
      const taskText = document.createElement('div');
      taskText.textContent = task.title;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');

      newTaskItem.appendChild(taskText);
      newTaskItem.appendChild(deleteBtn);
      taskList.appendChild(newTaskItem);

      deleteBtn.addEventListener('click', function() {
        taskList.removeChild(newTaskItem);
      });
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
