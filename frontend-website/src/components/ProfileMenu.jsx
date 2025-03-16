import React from 'react';
import { Bell, Settings, BookMarked, History, Heart, LogOut } from 'lucide-react';

import "../assets/styles/profilemenu.css"

const ProfileMenu = ({ isOpen }) => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  };

  const menuItems = [
    { icon: <Bell size={20} />, label: 'Notifications', count: 3 },
    { icon: <BookMarked size={20} />, label: 'Saved Places', count: 12 },
    { icon: <History size={20} />, label: 'Recent Views', count: 8 },
    { icon: <Heart size={20} />, label: 'Favorites', count: 5 },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  if (!isOpen) return null;

  return (
    <div className="profile-menu">
      <div className="card border-0 shadow">
        <div className="card-body p-0">
          <div className="p-3 border-bottom">
            <div className="d-flex align-items-center">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="rounded-circle me-3"
                style={{ width: '48px', height: '48px', objectFit: 'cover' }}
              />
              <div>
                <h6 className="mb-0">{userProfile.name}</h6>
                <small className="text-muted">{userProfile.email}</small>
              </div>
            </div>
          </div>

          <div className="p-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="profile-menu-item btn w-100 text-start d-flex align-items-center p-2 mb-1"
              >
                <span className="icon-wrapper text-primary">{item.icon}</span>
                <span className="ms-3">{item.label}</span>
                {item.count !== undefined && (
                  <span className="ms-auto badge bg-primary rounded-pill">
                    {item.count}
                  </span>
                )}
              </button>
            ))}

            <hr className="my-2" />

            <button className="profile-menu-item btn w-100 text-start d-flex align-items-center p-2 text-danger">
              <span className="icon-wrapper"><LogOut size={20} /></span>
              <span className="ms-3">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;