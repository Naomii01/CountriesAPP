import React from 'react';

const Header = () => {
    return (
        <div>
            {/* Sidebar (for responsiveness) */}
            <div className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-blue-500">
                {/* Sidebar content */}
                <ul className="py-4">
                    <li className="px-6 py-2 text-white">Country</li>
                    <li className="px-6 py-2 text-red">Continent</li>
                    <li className="px-6 py-2 text-white">Region</li>
                </ul>
            </div>
            <header className="relative bg-cover bg-center p-4" style={{backgroundImage: "url('')"}}>
                <div className="absolute inset-0 bg-opacity-75 bg-blue-500"></div>
                <div className="container mx-auto relative flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <img src="/img/logipsum-297.svg" alt="Logo" className="h-12 w-auto" />
                    </div>
                    {/* Navbar */}
                    <nav className="hidden lg:flex justify-end items-center">
                        <ul className="flex space-x-6 text-white">
                            <li>Country</li>
                            <li>Continent</li>
                            <li>Region</li>
                        </ul>
                    </nav>
                    {/* Search Bar */}
                    <div className="hidden lg:flex">
                        <input type="text" placeholder="Search..." className="w-full max-w-md px-4 py-2 rounded-full bg-white shadow-md focus:outline-none" />
                    </div>
                    {/* Sidebar button (for responsiveness) */}
                    <button className="lg:hidden text-white" onClick={() => {}}>
                        {/* Sidebar icon */}
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
