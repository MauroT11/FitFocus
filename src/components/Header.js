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
                <a className="btn btn-ghost text-5xl text-base-100">FitFocus</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base-100 text-3xl">
                <li><a>Calculators</a></li>
                <li>
                    <details>
                    <summary>Workouts</summary>
                    <ul className="p-2 text-lg text-primary">
                        <li><a>Back</a></li>
                        <li><a>Chest</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Daily intake</a></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn text-3xl">Button</a>
            </div>
        </div>
    )
}