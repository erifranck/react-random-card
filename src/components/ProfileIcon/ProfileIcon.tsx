import React from 'react';
import './ProfileIcon.scss';

export const ProfileIcon: React.FC = (props) => {
  return (
    <div className="profile-icon">
      {props.children}
    </div>
  )
}
