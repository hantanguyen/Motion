import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import 'tailwindcss/tailwind.css';

export default function About() {

    return(
        <div>
            <nav className="py-2 pb-4 text-black" style={{ marginTop: '-1rem' }}>
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div>
                        <img src="/MOTION_LOGO.png" alt="Motion Logo" className="h-88 w-288 m-10" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/about">
                            <span>About</span>
                        </Link>
                        <Link href="/contact">
                            <span>Contact</span>
                        </Link>
                        <Link href="/dashboard">
                            <span>Dashboard</span>
                        </Link>
                        <Link href="/login">
                            <span>Login</span>
                        </Link>
                        <Link href="/get-motion">
                            <button className="bg-black text-white py-2 px-4 rounded">Get Motion</button>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="m-4 text-5xl font-bold text-center">
                About
            </div>
            <p className="text-2xl container mx-auto mt-8 text-center">Motion is a website used for studying and productivity created by Ian Akubu, Hori Nguyen, and Celine Truong.
            This website was made for a semester-long project for CPSC 362 (Foundations of Software Engineering) at California State University, Fullerton. </p>
        </div>
    );
}