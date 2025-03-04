"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { supabase } from '@/utils/supabase'

export default function Header() {

    const { user } = useAuth()
    const router = useRouter()

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut()
            router.push('/Sign-in')
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }
    
    return (
        <div className="navbar bg-primary shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-primary-focus">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-base-100"
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
                        className="menu menu-sm dropdown-content bg-base-100 text-xl rounded-box z-20 mt-3 w-52 p-2 shadow-xl">
                        <li>
                            <a className="font-bold tracking-wide">Calculators</a>
                            <ul className="p-2 bg-base-100">
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/calculators/bmi">BMI</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/calculators/protein">Protein</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/calculators/calorie">Daily Calorie</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="font-bold tracking-wide">Workouts</a>
                            <ul className="p-2 bg-base-100">
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/arms">Arms</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/back">Back</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/chest">Chest</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/core">Core</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/legs">Legs</a></li>
                                <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/workouts/shoulders">Shoulders</a></li>
                            </ul>
                        </li>
                        { user ? (
                            <div>
                                <li>
                                    <a className="font-bold tracking-wide">Dashboard</a>
                                    <ul className="p-2 bg-base-100">
                                        <li><a className="tracking-wide hover:bg-primary hover:text-base-100" href="/dashboard">Dashboard</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <button 
                                        className="font-bold tracking-wide text-left w-full hover:bg-secondary hover:text-base-100"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </div>
                        ) : (
                            <li>
                                <a className="font-bold tracking-wide hover:bg-primary hover:text-base-100" href="/Sign-in">Sign In</a>
                            </li>
                        )}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl text-base-100 font-bold hover:bg-primary-focus" href="/">FitFocus</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base-100 text-xl">
                <li>
                    <details>
                        <summary className="hover:bg-secondary">Calculators</summary>
                        <ul className="p-2 bg-white rounded-box shadow-lg z-20 absolute text-lg text-primary min-w-max">
                            <li><a className="hover:bg-primary hover:text-base-100" href="/calculators/bmi">BMI</a></li>
                            <li><a className="hover:bg-primary hover:text-base-100" href="/calculators/protein">Protein</a></li>
                            <li><a className="hover:bg-primary hover:text-base-100" href="/calculators/calorie">Daily Calorie</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary className="hover:bg-secondary">Workouts</summary>
                        <ul className="p-2 bg-white rounded-box shadow-lg z-20 absolute text-lg text-primary min-w-max">
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/arms">Arms</a></li>
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/back">Back</a></li>
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/chest">Chest</a></li>
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/core">Core</a></li>
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/legs">Legs</a></li>
                            <li><a className="hover:bg-secondary hover:text-base-200" href="/workouts/shoulders">Shoulders</a></li>
                        </ul>
                    </details>
                </li>
                </ul>
            </div>
            { user ? (
                <div className="navbar-center hidden lg:flex">
                    <a className="text-lg text-base-100 hover:bg-secondary duration-200 p-2 rounded-box min-w-max" href="/dashboard">Dashboard</a>
                </div>
            ) : (
                null
            )}
            
            <div className="navbar-end hidden lg:flex">
                {user ? (
                <button 
                    className="btn btn-secondary hover:btn-secondary-focus text-base-100 shadow-md transition-all duration-300"
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
                ) : (
                <Link href="/Sign-in" className="btn btn-accent text-base-100 shadow-md hover:scale-105 transition-all duration-300">
                    Sign In
                </Link>
                )}
            </div>
        </div>
    )
}