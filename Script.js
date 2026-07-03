const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  createTaskElement(taskText);
  taskInput.value = '';
  taskInput.focus();
  updateEmptyMsg();
}

function createTaskElement(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  // Toggle complete on click
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';

  // Remove task on delete click
  deleteBtn.addEventListener('click', () => {
    li.remove();
    updateEmptyMsg();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function updateEmptyMsg() {
  if (taskList.children.length === 0) {
    emptyMsg.classList.remove('hidden');
  } else {
    emptyMsg.classList.add('hidden');
  }
}

// Initial check
updateEmptyMsg();
