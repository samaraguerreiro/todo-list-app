function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = function () {
      li.classList.toggle('completed');
    };

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ""; // Limpa o campo de input
  }
}

