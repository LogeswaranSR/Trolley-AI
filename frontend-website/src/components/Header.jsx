import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, Train, User } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

const Header = ({ states }) => {
    const { var: isSidebarOpen, fn: toggleSidebar } = states["sideBar"]
    
    const [searchQuery, setSearchQuery] = useState("");
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileMenuRef = useRef(null);
    const profileButtonRef = useRef(null);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target) &&
                !profileButtonRef.current?.contains(event.target)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container-fluid">
                <div
                    className="navbar-brand d-flex align-items-center"
                    style={{ color: "#4F46E5" }}
                >
                    <button className="btn btn-link" onClick={() => toggleSidebar(!isSidebarOpen)}>
                        <Train className="me-2" color="#4F46E5"/>
                    </button>
                    <span className={`logo-text ${isSidebarOpen ? "" : "collapsed"}`}>Trolley.AI</span>
                </div>

                <form
                    className="d-none d-md-flex flex-grow-1 mx-4"
                    onSubmit={handleSearchSubmit}
                >
                    <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                            <Search className="text-muted" size={20} />
                        </span>
                        <input
                            type="text"
                            className="form-control bg-light border-start-0"
                            placeholder="Search destinations..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </form>

                <div className="ms-auto d-flex align-items-center position-relative">
                    <button
                        ref={profileButtonRef}
                        className="btn btn-link text-dark"
                        onClick={toggleProfile}
                    >
                        <User size={24} />
                    </button>
                    <div ref={profileMenuRef}>
                        <ProfileMenu isOpen={isProfileOpen} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
