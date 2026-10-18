import React from 'react';
import type { GitHubUser } from '../../types/github';
import './UserCard.css';

interface UserDetailsProps {
  user: GitHubUser;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <div className="user-details__grid">
        <div className="user-details__stat">
          <span className="user-details__stat-value">{user.public_repos}</span>
          <span className="user-details__stat-label">Repos</span>
        </div>
        <div className="user-details__stat">
          <span className="user-details__stat-value">{user.followers}</span>
          <span className="user-details__stat-label">Seguidores</span>
        </div>
        <div className="user-details__stat">
          <span className="user-details__stat-value">{user.following}</span>
          <span className="user-details__stat-label">Siguiendo</span>
        </div>
      </div>
      <a
        className="user-details__link"
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver perfil de ${user.login} en GitHub`}
      >
        🔗 Ver perfil en GitHub
      </a>
    </div>
  );
};

export default UserDetails;
