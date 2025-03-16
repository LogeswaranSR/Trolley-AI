import React from "react";

const CityCard = ({ title, caption, description, image }) => {
    return (
        <div className="card h-100 shadow city-card">
            <div className="overflow-hidden">
                <img src={image} alt={title} className="card-img-top" />
            </div>
            <div className="card-body">
                <h3 className="card-title h4">{title}</h3>
                <p className="text-primary fw-medium mb-2">{caption}</p>
                <p className="card-text text-muted text-truncate-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CityCard;
