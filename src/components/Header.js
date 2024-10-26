"use client"

export default function Header() {
    
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                    className="menu menu-sm dropdown-content bg-base-100 text-3xl rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Calculators</a></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>BMI</a></li>
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
                <li><a>Daily intake</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
                {/* <a className="btn text-3xl">Button</a> */}
            </div>
        </div>
    )
}