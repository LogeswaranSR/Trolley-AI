import React from "react";
import { MapPin, MessageCircle, Bot } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CityCard from "../components/CityCard";

const HomePage = ({ states }) => {
    const { var: currentPage, fn: navigateTo } = states["currentPage"];

    const featureCards = [
        {
            id: 1,
            title: "Explore Tamil Nadu",
            description:
                "Discover the rich heritage, vibrant culture, and breathtaking landscapes of Tamil Nadu. From ancient temples to modern cities, start your journey here.",
            icon: <MapPin size={32} />,
            onClick: () => navigateTo("explore"),
        },
        {
            id: 2,
            title: "Start a Commentary",
            description:
                "Share your travel experiences, write reviews, and help fellow travelers make informed decisions about their next destination.",
            icon: <MessageCircle size={32} />,
        },
        {
            id: 3,
            title: "Ask Tanya",
            description:
                "Get personalized travel recommendations and answers to all your questions from Tanya, your AI travel companion.",
            icon: <Bot size={32} />,
            onClick: () => navigateTo("tanya"),
        },
    ];

    const cities = [
        {
            title: "Chennai",
            caption: "Gateway to South India",
            description:
                "A vibrant metropolis that perfectly blends tradition with modernity, featuring Marina Beach, historic temples, and colonial architecture.",
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Madurai",
            caption: "Temple City",
            description:
                "Home to the magnificent Meenakshi Temple, this ancient city offers a glimpse into Tamil Nadu's rich cultural heritage.",
            image: "https://images.unsplash.com/photo-1604693701565-21c591a4e3b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Coimbatore",
            caption: "Manchester of South India",
            description:
                "A major industrial hub surrounded by the Western Ghats, known for its pleasant climate and textile industry.",
            image: "https://images.unsplash.com/photo-1623394799093-d9f8b5da8539?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Trichy",
            caption: "Rock Fort City",
            description:
                "Famous for its historic Rock Fort Temple and Sri Ranganathaswamy Temple, embodying the essence of Tamil culture.",
            image: "https://images.unsplash.com/photo-1621831714462-3c837e2f6a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Kanyakumari",
            caption: "Land's End",
            description:
                "The southernmost tip of mainland India, where three oceans meet, offering spectacular sunrise and sunset views.",
            image: "https://images.unsplash.com/photo-1621831714462-3c837e2f6a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <div className="container">
            <section className="mb-5">
                <h1 className="display-4 mb-3">Welcome to Trolley.AI</h1>
                <p className="lead text-muted">
                    Your intelligent travel companion for discovering the
                    wonders of Tamil Nadu.
                </p>
            </section>

            <section className="mb-5">
                <div className="row g-4">
                    {featureCards.map((card) => (
                        <div key={card.id} className="col-12 col-md-4">
                            <div
                                className="card h-100 feature-card border-0 shadow-sm"
                                onClick={card.onClick}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-body">
                                    <div className="text-primary mb-3">
                                        {card.icon}
                                    </div>
                                    <h2 className="h4 card-title">
                                        {card.title}
                                    </h2>
                                    <p className="card-text text-muted">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-5">
                <h2 className="h2 mb-4">Explore Popular Cities</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-5"
                >
                    {cities.map((city, index) => (
                        <SwiperSlide key={index}>
                            <CityCard {...city} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default HomePage;
