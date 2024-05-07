import React, { useState, useEffect } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

function Dashboard() {
  const [seconds, setSeconds] = useState(25 * 60); 
  const [timerActive, setTimerActive] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [tasks, setTasks] = useState([
    "CPSC 349 Quiz",
    "Math 338 Homework 5",
    "CPSC 335 Homework 2",
  ]);

  const addTask = () => {
    const newTask = prompt("Enter a new task:");
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index].type === 's') {
      updatedTasks[index] = updatedTasks[index].props.children;
    } else {
      updatedTasks[index] = <s>{updatedTasks[index]}</s>;
    }
    setTasks(updatedTasks);
  };

  const startTimer = () => {
    setTimerActive(true);
    setTimerPaused(false);
  };

  const pauseTimer = () => {
    setTimerActive(false);
    setTimerPaused(true);
  };

  useEffect(() => {
    let intervalId;
    if (timerActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerActive, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  const handleShortBreak = () => {
    setSeconds(5 * 60); 
  };

  const handleLongBreak = () => {
    setSeconds(15 * 60); 
  };

  const handlePomodoro = () => {
    setSeconds(25 * 60); 
  };

  return (
    <div className="flex h-screen">
      <div className="flex-none w-1/4 bg-white-800 text-black-100 p-6 relative">
        <img
          src="/MOTION_LOGO.png"
          alt="Motion Logo"
          className="h-82 w-288 m1-10 pr-8 pb-4"
        />
        <h1 className="text-xl pb-2 font-bold mb-4 pl-2">Menu</h1>
        <a href="/dashboard">
          <button className="flex items-center bg-black text-white px-12 py-2 rounded-md hover:bg-gray-600">
            <img
              src="/dash_home.png"
              alt="Dashboard Icon"
              className="w-6 h-6 mr-2"
            />
            Dashboard
          </button>
        </a>
        <a href="/flashcards">
          <button className="flex text-black mt-5">
            <img
              src="/flashcards.png"
              alt="Flash Cards Icon"
              className="w-6 h-6 mr-2"
            />
            Flash Cards
          </button>
        </a>
        <a href="/calendar">
          <button className="flex text-black mt-5">
            <img
              src="/calendar.png"
              alt="Calendar Icon"
              className="w-6 h-6 mr-2"
            />
            Calendar
          </button>
        </a>
        <a href="/notes">
          <button className="flex text-black mt-5">
            <img src="/notes.png" alt="Note Icon" className="w-6 h-6 mr-2" />
            Notes
          </button>
        </a>
        <a href="/music">
          <button className="flex text-black mt-5">
            <img
              src="/music.png"
              alt="Music List Icon"
              className="w-6 h-6 mr-2"
            />
            Music
          </button>
        </a>

        <hr className="my-4 mt-96" />

        <a href="/settings">
          <button className="flex text-black mb-6">
            <img
              src="/settings.png"
              alt="Settings Icon"
              className="w-6 h-6 mr-2"
            />
            Settings
          </button>
        </a>

        <a href="/logout">
          <button className="flex text-black mb-12">
            <img
              src="/Logout .png"
              alt="Logout Icon"
              className="w-6 h-6 mr-2"
            />
            Logout
          </button>
        </a>

        <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>
      </div>

      <div className="w-3/4 bg-white p-6">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-2 w-3/4 mr-2"
          />
          <img src="/user_pfp.png" alt="User" className="w-6 h-6" />
          <h1>User</h1>
          <img src="/user_settings.png" alt="User settings" className="w-6 h-6" />
        </div>

        <hr className="my-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-lg p-96 h-full flex flex-col justify-start pl-4">
            <div className="flex flex-row" style={{ marginTop: "-340px" }}>
            <button className="px-8 py-4 bg-gray-300 text-black rounded-md hover:bg-gray-400 mb-4 mr-4" onClick={handlePomodoro}>
                Pomodoro
              </button>
              <button className="px-8 py-4 bg-gray-300 text-black rounded-md hover:bg-gray-400 mr-4" onClick={handleShortBreak}>
                Short Break
              </button>
              <button className="px-8 py-4 bg-gray-300 text-black rounded-md hover:bg-gray-400" onClick={handleLongBreak}>
                Long Break
              </button>
            </div>
            <h2 className="text-xl mr-12 font-semibold mb-2 text-center mt-auto">
              Timer
            </h2>
            <p className="text-8xl font-semibold text-gray-700 text-center">
              {formattedTime}
            </p>
            {!timerActive && !timerPaused && (
              <button
                className="mt-4 px-36 py-4 bg-black text-white rounded-md hover:bg-gray-600 text-center"
                style={{ marginLeft: "auto", marginRight: "160px" }}
                onClick={startTimer}
              >
                Start
              </button>
            )}
            {timerActive && (
              <button
                className="mt-4 px-48 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 text-center"
                onClick={pauseTimer}
              >
                Pause Timer
              </button>
            )}
            {timerPaused && (
              <button
                className="mt-4 px-48 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                onClick={startTimer}
              >
                Resume Timer
              </button>
            )}
          </div>

        <div
            className="bg-gray-200 rounded-lg p-4 ml-auto"
            style={{ marginRight: "-360px", width: "400px" }}
          >
            <h2 className="text-xl font-semibold mb-2">Todo List</h2>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="text-gray-800 cursor-pointer hover:bg-gray-300 py-1 px-2 rounded"
                  onClick={() => toggleTask(index)}
                >
                  {task}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
