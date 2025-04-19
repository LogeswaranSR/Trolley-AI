import React, {useState} from "react";
import { MapPin, Utensils, Gem, Landmark } from 'lucide-react';

const LocalHelpPage = ({states}) => {
    const [activeFilter, setActiveFilter] = useState("restaurant");

    const spots = [
        {
            id: 1,
            name: "Saravana Bhavan",
            type: "restaurant",
            distance: "0.8 km",
            rating: 4.5,
            description:
                "Famous South Indian vegetarian restaurant chain known for authentic dishes.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            name: "Broken Bridge",
            type: "hidden-gem",
            distance: "2.1 km",
            rating: 4.2,
            description:
                "A peaceful spot offering stunning views of the Bay of Bengal.",
            image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            name: "Marina Beach",
            type: "tourist",
            distance: "1.5 km",
            rating: 4.7,
            description: "The second-longest urban beach in the world.",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const filteredSpots = spots.filter((spot) => spot.type === activeFilter);
	
    return (
        <div className="container-fluid p-4">
            <div className="mb-4">
                <h1 className="h3">You are in Chennai</h1>
                <p className="text-muted">Discover amazing places around you</p>
            </div>

            <div className="row g-4">
                {/* Map Section */}
                <div className="col-lg-8">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="bg-light rounded" style={{ height: "600px" }}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <div className="text-center text-muted">
                                        <MapPin size={48} className="mb-3" />
                                        <p>Map interface will be integrated here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spots List Section */}
                <div className="col-lg-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex gap-2 mb-4">
                                <button
                                    className={`btn ${ activeFilter === "restaurant" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() => setActiveFilter("restaurant")}
                                >
                                    <Utensils size={18} className="me-2" />
                                    Restaurants
                                </button>
                                <button
                                    className={`btn ${ activeFilter === "hidden-gem" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() =>setActiveFilter("hidden-gem")}
                                >
                                    <Gem size={18} className="me-2" />
                                    Hidden Gems
                                </button>
                                <button
                                    className={`btn ${ activeFilter === "tourist" ? "btn-primary" : "btn-outline-primary"}`}
                                    onClick={() => setActiveFilter("tourist")}
                                >
                                    <Landmark size={18} className="me-2" />
                                    Tourist Spots
                                </button>
                            </div>
                            <div className="spots-list" style={{ height: "520px", overflowY: "auto" }}>
                                {filteredSpots.map((spot) => (
                                    <div key={spot.id} className="card mb-3 hover-card">
                                        <img
                                            src={spot.image}
                                            alt={spot.name}
                                            className="card-img-top"
                                            style={{
                                                height: "160px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <h5 className="card-title mb-0">
                                                    {spot.name}
                                                </h5>
                                                <span className="badge bg-primary">
                                                    {spot.distance}
                                                </span>
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-warning">
                                                    {"★".repeat(Math.floor(spot.rating))}
                                                </span>
                                                <span className="text-muted ms-2">
                                                    {spot.rating}
                                                </span>
                                            </div>
                                            <p className="card-text text-muted">
                                                {spot.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocalHelpPage;
