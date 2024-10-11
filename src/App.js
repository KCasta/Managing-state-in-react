import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TasksLists from "./components/TasksLists";
import { Toaster } from "react-hot-toast";
import { useTodoConext } from "./context/TodoContenxt";
const App = () => {
  const { tasks, setTasks } = useTodoConext();
  const [taskToEdit, setTaskToEdit] = useState(null);
  // Add a useEffect to fetch the intial tasks from the local storage
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(tasks);
  }, [setTasks]);

  //Add another useEffect to save the tasks to the local storage whennever the tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // create a function to add a new task to the tasks array

  const addTask = (task) => {
    //Check if the task is being edited
    if (taskToEdit) {
      // update the task with the new task details
      const updatedTasks = tasks.map((eachTask) => {
        if (eachTask.id === taskToEdit.id) {
          return task;
        }
        return eachTask;
      });
      setTasks(updatedTasks);
      setTaskToEdit(null);
      return;
    }

    setTasks([...tasks, task]);
  };
  const taskEditHandler = (task) => {
    setTaskToEdit(task);
  };
  return (
    <div className="main-container">
      <Toaster />
      <div className="container">
        <AddTaskForm onAddTask={addTask} taskToEdit={taskToEdit} />
        <TasksLists tasks={tasks} onEditTask={taskEditHandler} />
      </div>
    </div>
  );
};

export default App;
