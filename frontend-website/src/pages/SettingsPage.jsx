import React from "react";
import { User, Mail, Phone, MapPin, Bell, Lock, Palette, Languages as Language } from 'lucide-react';

const SettingsPage = ({states}) => {
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+91 98765 43210",
        location: "Chennai, Tamil Nadu",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    };

    const settingsSections = [
        {
            title: "Notifications",
            icon: <Bell size={20} />,
            description: "Configure how you receive alerts and updates",
        },
        {
            title: "Privacy & Security",
            icon: <Lock size={20} />,
            description: "Manage your account security and privacy preferences",
        },
        {
            title: "Appearance",
            icon: <Palette size={20} />,
            description: "Customize how Trolley.AI looks on your device",
        },
        {
            title: "Language & Region",
            icon: <Language size={20} />,
            description: "Set your preferred language and regional settings",
        },
    ];
    return (
        <div className="container py-4">
            <h1 className="h3 mb-4">Settings</h1>

            {/* Profile Section */}
            <div className="card mb-4">
                <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                        <img
                            src={userProfile.avatar}
                            alt={userProfile.name}
                            className="rounded-circle me-4"
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                            }}
                        />
                        <div>
                            <h2 className="h4 mb-1">{userProfile.name}</h2>
                            <p className="text-muted mb-3">Travel Enthusiast</p>
                            <button className="btn btn-primary me-2">
                                Edit Profile
                            </button>
                            <button className="btn btn-outline-secondary">
                                View Public Profile
                            </button>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center p-3 bg-light rounded">
                                <User size={20} className="text-primary me-3" />
                                <div>
                                    <div className="text-muted small">
                                        Full Name
                                    </div>
                                    <div>{userProfile.name}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center p-3 bg-light rounded">
                                <Mail size={20} className="text-primary me-3" />
                                <div>
                                    <div className="text-muted small">
                                        Email
                                    </div>
                                    <div>{userProfile.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center p-3 bg-light rounded">
                                <Phone
                                    size={20}
                                    className="text-primary me-3"
                                />
                                <div>
                                    <div className="text-muted small">
                                        Phone
                                    </div>
                                    <div>{userProfile.phone}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center p-3 bg-light rounded">
                                <MapPin
                                    size={20}
                                    className="text-primary me-3"
                                />
                                <div>
                                    <div className="text-muted small">
                                        Location
                                    </div>
                                    <div>{userProfile.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Settings Sections */}
            <div className="row g-4">
                {settingsSections.map((section, index) => (
                    <div key={index} className="col-md-6">
                        <div className="card h-100 hover-card cursor-pointer">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <span className="text-primary me-3">
                                        {section.icon}
                                    </span>
                                    <h3 className="h5 mb-0">{section.title}</h3>
                                </div>
                                <p className="text-muted mb-0">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SettingsPage;
