import React, { useState, useEffect } from 'react';

function Dashboard() {

  const [seconds, setSeconds] = useState(0);
  
  const [tasks, setTasks] = useState([
    "CPSC 349 Quiz",
    "Math 338 Homework 5",
    "CPSC 335 Homework 2"
  ]);
  
  const addTask = () => {
    const newTask = prompt("Enter a new task:");
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
      </div>

      <div className="main-content">
        <h1>Dashboard</h1>

        <div className="timer">
          <h2>Timer</h2>
          <p>Seconds: {seconds}</p>
        </div>

        <div className="todo-list">
          <h2>Todo List</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
