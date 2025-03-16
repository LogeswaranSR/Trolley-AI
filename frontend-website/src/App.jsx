import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TanyaPage from "./pages/TanyaPage";

function App() {
    const [sideBarState, setSideBarState] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");

    const states = {
        sideBar: {
            var: sideBarState,
            fn: setSideBarState,
        },
        currentPage: {
            var: currentPage,
            fn: setCurrentPage,
        },
    };

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
            <Header states={states} />
            <div className="flex-grow-1 d-flex">
                <SideBar states={states} />
				<main className={`${sideBarState ? 'main-content' : 'main-content sidebar-collapsed'}`}>
					{currentPage === "home" && <HomePage states={states} />}
					{currentPage === "tanya" && <TanyaPage />}
				</main>
            </div>
			<Footer />
        </div>
    );
}

export default App;
