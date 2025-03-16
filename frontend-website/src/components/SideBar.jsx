import React from "react";
import {
    Home,
    MessageSquare,
    Compass,
    Settings,
    ChevronLeft,
    ChevronRight,
    HelpCircle,
} from "lucide-react";

import "../assets/styles/sidebar.css";

const Sidebar = ({ states }) => {
    const { var: isSidebarOpen, fn: toggleSidebar } = states["sideBar"];
    const { var: currentPage, fn: navigateTo } = states["currentPage"];

    const menuItems = [
        { id: "home", name: "Home", icon: <Home size={20} /> },
        { id: "tanya", name: "Tanya", icon: <MessageSquare size={20} /> },
        { id: "explore", name: "Explore", icon: <Compass size={20} /> },
        {
            id: "local-help",
            name: "Local Help",
            icon: <HelpCircle size={20} />,
        },
        { id: "settings", name: "Settings", icon: <Settings size={20} /> },
    ];

    return (
        <>
            {isSidebarOpen && (
                <div
                    className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                    style={{ zIndex: 1029 }}
                    onClick={toggleSidebar}
                ></div>
            )}

            <aside className={`sidebar shadow ${!isSidebarOpen ? "collapsed" : ""}`}>
                <div className="d-flex justify-content-between align-items-center p-3">
                    <h2 className={`h5 mb-0 ${!isSidebarOpen ? "d-none" : ""}`}>
                        Menu
                    </h2>
                </div>

                <nav className="p-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            className={`menu-item btn w-100 text-start border-0 ms-0 mb-2 p-3 d-flex align-items-center ${
                                currentPage === item.id ? "active" : ""
                            }`}
                            onClick={() => navigateTo(item.id)}
                        >
                            {item.icon}
                            <span className="menu-text ms-3">{item.name}</span>
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
