import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

export default function SignUp() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
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
			<div className="min-h-screen flex justify-center items-center bg-white">
				<div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
					<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							console.log(formData);
							setFormData({
								username: "",
								email: "",
								password: "",
								confirmPassword: ""
							});
						}}>
						<div className="mb-4">
							<label
								htmlFor="username"
								className="block text-gray-700">
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="confirmPassword"
								className="block text-gray-700">
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								className="mt-1 block w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
							/>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
