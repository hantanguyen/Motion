import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<nav className="py-2 pb-4 text-black" style={{ marginTop: "-1rem" }}>
			    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
				    <div>
					    <img
						    src="/MOTION_LOGO.png"
						    alt="Motion Logo"
						    style={{ height: "12rem", paddingTop: "1rem" }}
					    />
				    </div>
				    <div className="flex items-center space-x-4">
					    <a href="/about">
						    <span>About</span>
					    </a>
					    <a href="/contact">
						    <span>Contact</span>
					    </a>
					    <a href="/dashboard">
						    <span>Dashboard</span>
					    </a>
					    <a href="/login">
						    <span>Login</span>
					    </a>
					    <a href="/get-motion">
						    <button className="bg-black text-white py-2 px-4 rounded">
							    Get Motion
						    </button>
					    </a>
				    </div>
			    </div>
		    </nav>
			<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300">
				<h2 className="text-2xl font-bold mb-4">Log In</h2>
				<div className="border-2 border-blue-500 p-4">
					<form
						onSubmit={(event) => {
							event.preventDefault();
							// Here you can implement your login logic, such as sending a request to a server
							console.log("Username:", username);
							console.log("Password:", password);
							// Reset the form after submission
							setUsername("");
							setPassword("");
						}}>
						<div className="mb-4">
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700">
								Username:
							</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(event) =>
									setUsername(event.target.value)
								}
								required
								className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700">
								Password:
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)
								}
								required
								className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
							Login
						</button>
						<div className="mt-4 text-center">
							New to Motion?{" "}
							<Link href="/signup" className="font-bold">
								Join Now
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
