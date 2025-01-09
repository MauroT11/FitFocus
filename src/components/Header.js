"use client"
import { FaUser } from "react-icons/fa";
import {UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'

export default function Header() {

    const { isLoaded, user } = useUser()
    
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-white btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-3xl rounded-box z-[1] mt-3 w-52 p-2 shadow-lg shadow-primary">
                        <li>
                        <a className="font-bold tracking-widest">Calculators</a>
                        <ul className="p-2">
                            <li><a className="tracking-wider" href="/calculators/bmi">BMI</a></li>
                            <li><a className="tracking-wider" href="/calculators/protein">Protein</a></li>
                            <li><a className="tracking-wider" href="/calculators/calorie">Daily Calorie</a></li>
                        </ul>
                        </li>
                        <li>
                        <a className="font-bold tracking-widest">Workouts</a>
                        <ul className="p-2">
                            <li><a className="tracking-wider" href="/workouts/arms">Arms</a></li>
                            <li><a className="tracking-wider" href="/workouts/back">Back</a></li>
                            <li><a className="tracking-wider" href="/workouts/chest">Chest</a></li>
                            <li><a className="tracking-wider" href="/workouts/core">Core</a></li>
                            <li><a className="tracking-wider" href="/workouts/legs">Legs</a></li>
                            <li><a className="tracking-wider" href="/workouts/shoulders">Shoulders</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-5xl text-base-100" href="/">FitFocus</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base-100 text-3xl">
                <li>
                    <details>
                    <summary>Calculators</summary>
                    <ul className="p-1 min-w-full border-2 border-base-300 z-20 absolute text-2xl text-primary">
                        <li><a href="/calculators/bmi">BMI</a></li>
                        <li><a href="/calculators/protein">Protein</a></li>
                        <li><a href="/calculators/calorie">Daily Calorie</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Workouts</summary>
                    <ul className="p-1 min-w-full border-2 border-base-300 z-20 text-2xl text-primary">
                        <li><a href="/workouts/arms">Arms</a></li>
                        <li><a href="/workouts/back">Back</a></li>
                        <li><a href="/workouts/chest">Chest</a></li>
                        <li><a href="/workouts/core">Core</a></li>
                        <li><a href="/workouts/legs">Legs</a></li>
                        <li><a href="/workouts/shoulders">Shoulders</a></li>
                    </ul>
                    </details>
                </li>
                {user ? (
                        <li><a className="px-1 text-base-100 text-3xl" href={`/account/${user.username}/fittracking`}>FitTracking</a></li>
                ) : (
                    null
                )}
                </ul>
            </div>
            <div className="navbar-end text-white">
            {user ? (
                <UserButton 
                    className="text-5xl"
                    showName={true}
                    userProfileUrl={`/account/${user.username}`}
                    afterSignOutUrl="/"
                    appearance= {{
                        variables: {
                            colorText: '#f97316',
                            colorPrimary: 'white',
                            fontSize: '1.5rem',
                            spacingUnit: '1.5rem',
                            fontWeight: 300,
                        },
                    }}
                />
            ) : (
                <a className="btn bg-accent hover:bg-red-500 text-white glass text-3xl" href="/signin"><FaUser />Sign In</a>
            )}
                
            </div>
        </div>
    )
}