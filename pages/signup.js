import React, { useState } from "react";
import axios from 'axios';
import 'tailwindcss/tailwind.css';

export default function SignUp() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: ""
	});

	const handleChange = async (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });

		event.preventDefault();
	};

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
				<div>
					<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
					<form
						onSubmit={async (event) => {
							event.preventDefault();

							if (formData.password !== formData.confirmPassword)
								return alert(`Please make sure your password matches your confirm password field.`)
							else 
								try {
									const response = await axios.post('http://localhost:3000/api/signup', { username: formData.username, password: formData.username });

									if (response.status !== 200) return alert(`Error signing up: ${response.tex}`)
									
									setFormData({
										username: "",
										password: "",
										confirmPassword: ""
									});

									alert('Sign up successful! Please log in with your credentials now.');
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
								name="username"
								value={formData.username}
								onChange={handleChange}
								className="mt-1 p-2 block w-full rounded-md bg-gray-100 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<div className="mb-4">
							<input
								type="password"
								placeholder="Password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="mt-1 p-2 block w-full rounded-md bg-gray-100 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<div className="mb-4">
							<input
								type="password"
								placeholder="Confirm Password"
								id="confirmPassword"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								className="mt-1 p-2 block w-full rounded-md bg-gray-100 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-neutral-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-neutral-950 focus:outline-none focus:bg-neutral-950">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
