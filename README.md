# Todo App

## Overview

This is a simple Todo application built with React. It allows users to add, edit, delete, and toggle the completion status of todo items. Todos are stored in local storage to persist data between sessions.

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Show/Hide completed tasks
- Responsive design for mobile and desktop

## Screenshots

### Home Page
![1](https://github.com/user-attachments/assets/826872a3-0b6e-4967-8bc2-5dc27f5f7d22)

### next
![3](https://github.com/user-attachments/assets/e5b4772f-294e-470b-987a-3138b4b442dc)

### next
![4](https://github.com/user-attachments/assets/da097afe-097c-4a63-acba-2715b8e07143)

## Components

### `App`

The main component that handles the state and functionality of the Todo application.

#### State

- `todo`: Holds the current value of the input field for adding or editing todos.
- `todos`: An array of todo objects. Each todo has an `id`, `todo` text, and `isCompleted` status.
- `showFinished`: A boolean that determines whether completed todos should be displayed.

#### Effects

- `useEffect()`: Loads todos from local storage when the component mounts.

#### Functions

- `saveToLocalStorage(todos)`: Saves the current todos list to local storage.

- `handleAdd()`: Adds a new todo to the list and saves it to local storage.
  
- `handleChange(e)`: Updates the `todo` state with the new input value.
  
- `handleCheckbox(e)`: Toggles the completion status of a todo and updates local storage.
  
- `handleEdit(e, id)`: Sets the input field with the todo text for editing and removes the todo from the list.
  
- `handleDelete(e, id)`: Deletes a todo from the list and updates local storage.
  
- `toggleFinished()`: Toggles the visibility of completed todos.

#### Rendering

- Input field and button to add a new todo.
- Checkbox to toggle the visibility of completed todos.
- List of todos with options to edit or delete each item.

## Usage

1. **Adding Todos**: Enter text in the input field and click the "ADD" button to add a new todo.
2. **Editing Todos**: Click the edit button next to a todo to start editing. The todo will be removed from the list for editing. Update the text in the input field and add it back to the list.
3. **Deleting Todos**: Click the delete button next to a todo to remove it from the list.
4. **Toggling Completion**: Click the checkbox next to a todo to mark it as completed or incomplete.
5. **Visibility Toggle**: Use the checkbox labeled "Show Finished" to toggle the visibility of completed todos.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
