// Get references to the HTML elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
addTaskBtn.addEventListener('click', function() {
    const taskDescription = taskInput.value.trim();
    
    if (taskDescription !== '') {
        // Create a new task element
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        
        // Create the task description (p element)
        const taskText = document.createElement('p');
        taskText.textContent = taskDescription;
        taskElement.appendChild(taskText);

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        taskElement.appendChild(deleteBtn);

        // Create the complete button
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = 'Complete';
        taskElement.appendChild(completeBtn);

        // Append the new task to the task list
        taskList.appendChild(taskElement);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskElement);
        });

        // Add event listener to the complete button
        completeBtn.addEventListener('click', function() {
            // Toggle the completed class on the task text (strike-through effect)
            taskText.classList.toggle('completed');
            
            // Change the button text based on task completion state
            if (taskText.classList.contains('completed')) {
                completeBtn.textContent = 'Undo';
            } else {
                completeBtn.textContent = 'Complete';
            }
        });
    }
});