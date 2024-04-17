
import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios';
import Head from "next/head";
import 'tailwindcss/tailwind.css';

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
						    className="h-88 w-288 m-10"
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
				<p className="text-sm/[12px] font-normal text-gray-500 lg:text-xl dark:text-gray-400">Stay up to date on studying</p>
				<div>
					<form
						onSubmit={async (event) => {
							event.preventDefault();

							try {
								const response = await axios.post('http://localhost:3000/api/login', { username, password });

								if (response.status === 400) return alert(`No user exists with that information, please check your username and password.`)
								else if (response.status !== 200) return alert(`Error signing up: ${response.tex}`)

								setUsername("");
								setPassword("");

								return alert(`Logged in!`)
							} catch (error) {
								if (error instanceof axios.AxiosError) {
									return alert(`Error signing up: ${error.response.data}`)
								}

								console.error('Error signing up: ', error);
								alert('Error signing up. Please try again later.');
							}
						}}>
						<div className="mb-4">
							<input
								type="text"
								placeholder="Username"
								id="username"
								value={username}
								onChange={(event) =>
									setUsername(event.target.value)
								}
								required
								className="mt-1 p-2 block w-full rounded-md bg-gray-100 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<div className="mb-4">
							<input
								type="password"
								placeholder="Password"
								id="password"
								value={password}
								onChange={(event) =>
									setPassword(event.target.value)
								}
								required
								className="mt-1 p-2 block w-full rounded-md bg-gray-100 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<div>
							<Link href="/forgotpassword" className="font-bold">
								Forgot password?
							</Link>
						</div>
						<button
							type="submit"
							className="w-full bg-neutral-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-neutral-950 focus:outline-none focus:bg-neutral-950">
							Sign In
						</button>
					</form>
				</div>
			</div>
			<div className="mt-4 text-center">
				New to Motion?{" "}
					<Link href="/signup" className="font-bold">
						Join Now
					</Link>
			</div>
		</div>
	);
}
