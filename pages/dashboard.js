import React, { useState, useEffect } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

function Dashboard() {
  const [seconds, setSeconds] = useState(25 * 60); // 25 minutes in seconds
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

  // Convert seconds to minutes and seconds format
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  return (
    <div className="flex h-screen">
      <div className="flex-none w-1/4 bg-white-800 text-black-100 p-6 relative">
        <img src="/MOTION_LOGO.png" alt="Motion Logo" className="h-88 w-288 m-10" />
        <h1 className="text-xl font-bold mb-4 pl-2">Menu</h1>
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
        <div className="absolute inset-y-0 right-0 w-px bg-gray-300"></div>
      </div>
      <div className="w-3/4 bg-white p-6">
      <h1 className="text-xl font-bold mb-4 pl-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Timer</h2>
            <p className="text-xl font-semibold text-gray-700">{formattedTime}</p>
            {!timerActive && !timerPaused && (
              <button
                className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600"
                onClick={startTimer}
              >
                Start 
              </button>
            )}
            {timerActive && (
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={pauseTimer}
              >
                Pause Timer
              </button>
            )}
            {timerPaused && (
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={startTimer}
              >
                Resume Timer
              </button>
            )}
          </div>

          <div className="bg-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Todo List</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="text-gray-800">
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
