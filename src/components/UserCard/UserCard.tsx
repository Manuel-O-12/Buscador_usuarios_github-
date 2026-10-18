import React, { useState } from 'react';
import type { GitHubUser } from '../../types/github';
import UserDetails from './UserDetails';
import './UserCard.css';

interface UserCardProps {
  user: GitHubUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div>
      <div className="user-card">
        <img
          className="user-card__avatar"
          src={user.avatar_url}
          alt={`Avatar de ${user.login}`}
        />
        <div className="user-card__info">
          <h2 className="user-card__name">{user.name ?? user.login}</h2>
          <p className="user-card__login">@{user.login}</p>
        </div>
        <button
          className="user-card__details-btn"
          onClick={toggleDetails}
          aria-expanded={showDetails}
          aria-label={showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        >
          👁️ {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
      </div>

      {showDetails && <UserDetails user={user} />}
    </div>
  );
};

export default UserCard;
