import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import 'tailwindcss/tailwind.css';

export default function Contact() {

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
                Contact Us
            </div>
            <div className="grid grid-rows-3 grid-cols-5 gap-8">
                <div className="m-10 bg-white shadow-md rounded-lg p-6 col-start-2 col-span-3 text-center">
                <img src="" alt="Picture of Ian" className="rounded-full mx-auto max-w-xs"/>
                <div className="font-bold text-xl">Ian Akubu</div>
                <div className="text-base mt-4">CSUF Email: @csu.fullerton.edu</div>
                <div className="text-base">Personal Email: @gmail.com</div>
                <a href="">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-10 h-10 mx-auto m-4"/>
                </a>
                </div>

                <div className="m-10 bg-white shadow-md rounded-lg p-6 col-start-2 col-span-3 text-center">
                <img src="" alt="Picture of Hori" className="rounded-full mx-auto max-w-xs"/>
                <div className="font-bold text-xl">Hori Nguyen</div>
                <div className="text-base mt-4">CSUF Email: @csu.fullerton.edu</div>
                <div className="text-base">Personal Email: @gmail.com</div>
                <a href=" ">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-10 h-10 mx-auto m-4"/>
                </a>
                </div>

                <div className="m-10 bg-white shadow-md rounded-lg p-6 col-start-2 col-span-3 text-center">
                <img src="/celine.jpg" alt="Picture of Celine" className="rounded-full mx-auto max-w-xs"/>
                <div className="font-bold text-xl">Celine Truong</div>
                <div className="text-base mt-4">CSUF Email: celinetruong@csu.fullerton.edu</div>
                <div className="text-base">Personal Email: celinetruong04@gmail.com</div>
                <a href="https://www.linkedin.com/in/celine-ann-truong/">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-10 h-10 mx-auto m-4"/>
                </a>
                </div>
            </div>
        </div>
    );
}