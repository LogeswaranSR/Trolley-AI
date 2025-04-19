import React, { useState } from "react";
import { Search } from "lucide-react";
import PlaceCard from "../components/PlaceCard";

const ExplorePage = ({ states }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const personalSuggestions = [
        {
            id: 1,
            name: "Thanjavur Palace",
            type: "Heritage",
            rating: 4.7,
            visitTime: "Best time: 9 AM - 5 PM",
            crowdLevel: "Moderate",
            description:
                "The Thanjavur Maratha Palace was built in the 16th century and showcases stunning Maratha and Nayak architecture.",
            image: "https://images.unsplash.com/photo-1623394799093-d9f8b5da8539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            name: "Kodaikanal Lake",
            type: "Nature",
            rating: 4.6,
            visitTime: "Best time: 8 AM - 6 PM",
            crowdLevel: "High",
            description:
                "A star-shaped artificial lake surrounded by lush green hills, perfect for boating and picnics.",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            name: "Shore Temple",
            type: "Temple",
            rating: 4.8,
            visitTime: "Best time: 6 AM - 6 PM",
            crowdLevel: "High",
            description:
                "A UNESCO World Heritage site, this 8th-century temple showcases ancient Dravidian architecture.",
            image: "https://images.unsplash.com/photo-1604693701565-21c591a4e3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            name: "Yelagiri Hills",
            type: "Hill Station",
            rating: 4.4,
            visitTime: "Best time: 7 AM - 7 PM",
            crowdLevel: "Low",
            description:
                "A serene hill station known for its orchards, rose gardens, and adventure activities.",
            image: "https://images.unsplash.com/photo-1621831714462-3c837e2f6a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const popularPlaces = [
        {
            id: 1,
            name: "Meenakshi Amman Temple",
            type: "Temple",
            rating: 4.8,
            visitTime: "Best time: 6 AM - 12 PM",
            crowdLevel: "Moderate",
            description:
                "The historic Meenakshi Amman Temple is a testament to Dravidian architecture, featuring intricately carved gopurams and a sacred tank.",
            image: "https://images.unsplash.com/photo-1604693701565-21c591a4e3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            name: "Marina Beach",
            type: "Beach",
            rating: 4.5,
            visitTime: "Best time: 4 PM - 7 PM",
            crowdLevel: "High",
            description:
                "The second-longest urban beach in the world, Marina Beach offers a vibrant atmosphere with local street food and historic landmarks.",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            name: "Ooty Lake",
            type: "Lake",
            rating: 4.3,
            visitTime: "Best time: 9 AM - 5 PM",
            crowdLevel: "Moderate",
            description:
                "An artificial lake surrounded by Eucalyptus trees, offering boating facilities and picturesque views of the Nilgiri hills.",
            image: "https://images.unsplash.com/photo-1623394799093-d9f8b5da8539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            name: "Rameshwaram Temple",
            type: "Temple",
            rating: 4.9,
            visitTime: "Best time: 5 AM - 9 PM",
            crowdLevel: "High",
            description:
                "One of the most sacred Hindu temples in India, known for its magnificent corridors and spiritual significance.",
            image: "https://images.unsplash.com/photo-1621831714462-3c837e2f6a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <div className="container-fluid p-0">
            <div className="bg-primary bg-gradient text-white py-5">
                <div className="container">
                    <div className="search-container position-relative">
                        <div className="input-group input-group-lg mb-4">
                            <span className="input-group-text bg-white border-end-0">
                                <Search size={24} className="text-primary" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                placeholder="Search for temples, beaches, hills, or any tourist spot..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <h1 className="display-5 mb-2">
                            Search any place in Tamil Nadu
                        </h1>
                        <p className="lead">
                            We'll help you discover the perfect destinations
                        </p>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <section className="mb-5">
                    <h2 className="h3 mb-4">Personal Suggestions</h2>
					<div className="row g-4">
                    	{personalSuggestions.map((place) => (<PlaceCard place={place} />))}
					</div>
                </section>

                <section>
                    <h2 className="h3 mb-4">Popular Places</h2>
					<div className="row g-4">
						{popularPlaces.map((place) => (<PlaceCard place={place} />))}
					</div>
                </section>
            </div>
        </div>
    );
};

export default ExplorePage;
