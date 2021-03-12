/* // Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = []; */

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    markCompleted: function () {
      this.complete = true;
    },

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

  };

  return task;
}

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "😷"); // task 0
task1.markCompleted();
const task2 = newTask("Do Laundry", "👚"); // task 1
const tasks = [task1, task2];

tasks.forEach(task => task.logState());
