import React from 'react';
import { MapPin, Star, Clock, Users } from 'lucide-react';


const PlaceCard = ({place}) => {
  return (
    <div key={place.id} className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm hover-card">
            <img 
              src={place.image} 
              alt={place.name}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h3 className="h5 card-title mb-0">{place.name}</h3>
                <span className="badge bg-primary">{place.type}</span>
              </div>
              
              <div className="mb-3">
                <div className="d-flex align-items-center text-warning mb-2">
                  <Star size={18} className="me-1" fill="currentColor" />
                  <span>{place.rating}</span>
                </div>
                <div className="d-flex align-items-center text-muted small mb-1">
                  <Clock size={16} className="me-1" />
                  <span>{place.visitTime}</span>
                </div>
                <div className="d-flex align-items-center text-muted small">
                  <Users size={16} className="me-1" />
                  <span>Crowd: {place.crowdLevel}</span>
                </div>
              </div>
              
              <p className="card-text text-muted">{place.description}</p>
              
              <div className="d-flex align-items-center mt-3">
                <MapPin size={18} className="text-primary me-2" />
                <button className="btn btn-outline-primary btn-sm">View on map</button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PlaceCard