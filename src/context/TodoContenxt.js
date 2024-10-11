import React from "react";
import { useContext, useState, createContext } from "react";

const TodoContext = createContext();
// Create  a custom hook for  using the TodoContext to access the values stored in the context
export const useTodoConext = () => {
  return useContext(TodoContext);
};
// Create a provider component to wrap the components that need access to the context
export const TodoContenxtProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};
