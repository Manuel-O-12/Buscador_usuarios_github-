import React, { useState, type KeyboardEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Ingresa un usuario de GitHub..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        aria-label="Nombre de usuario de GitHub"
      />
      <button
        className="search-bar__btn"
        onClick={handleSearch}
        disabled={isLoading || !inputValue.trim()}
        aria-label="Buscar usuario"
      >
        {isLoading ? 'Buscando…' : 'Buscar'}
      </button>
    </div>
  );
};

export default SearchBar;
